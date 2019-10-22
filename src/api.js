"use strict";
const puppeteer = require("puppeteer");
const importJSX = require("import-jsx");
const he = require("he");
const ReactDOMServer = require("react-dom/server");
const PATH = require("path");
const FS = require("fs");

const screenshotDOMElement = async (
  page,
  selector,
  name,
  folder,
  padding = 0
) => {
  const rect = await page.evaluate(selector => {
    const element = document.querySelector(selector);
    const { x, y, width, height } = element.getBoundingClientRect();
    return { left: x, top: y, width, height, id: element.id };
  }, selector);
  return await page.screenshot({
    path: `${folder}/${name}.png`,
    omitBackground: true,
    clip: {
      x: rect.left - padding,
      y: rect.top - padding,
      width: rect.width + padding * 2,
      height: rect.height + padding * 2
    }
  });
};
const createDir = dir =>
  new Promise((resolve, reject) => {
    FS.exists(dir, () => {
      FS.mkdir(dir, resolve);
    });
  });

const getHTML = (readme, linebreak) =>
  new Promise((resolve, reject) => {
    const html = ReactDOMServer.renderToString(readme).replace(
      /<!-- -->/g,
      "\n".repeat(linebreak)
    );
    resolve(he.decode(html));
  });

const evaluateHTML = (browser, html) =>
  new Promise(async (resolve, reject) => {
    const page = await browser.newPage();
    await page.setContent(html, {
      waitUntil: "networkidle0"
    });
    const snapshots = await page.evaluate(() => {
      const styles = Array.from(
        document.querySelectorAll(
          "style[data-reactroot], style[data-emotion-css]"
        )
      )
        .map(style => style.innerHTML)
        .join("\n\n");
      const elements = Array.from(
        document.querySelectorAll("[data-reactroot]:not(style)")
      );
      return elements.map((el, i) => {
        return {
          globalstyle: `<style>${styles}</style>`,
          html: el.outerHTML
            .replace(/(<img\b[^<>]*[^<>\/])>/gi, "$1/>")
            .replace(/(<br\b[^<>]*[^<>\/])>/gi, "$1/>")
            .replace(/(<input\b[^<>]*[^<>\/])>/gi, "$1/>"),
          filename: `${el.tagName}_${i}`
        };
      });
    });
    resolve(snapshots);
  });

const takeSnapshots = (browser, snapshots, dir) =>
  new Promise(async (resolve, reject) => {
    const replacers = snapshots.map(async snap => {
      const page = await browser.newPage();
      await page.setContent(
        `
      <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        ${snap.globalstyle}
    </head>
    <body>
        ${snap.html}
    </body>
    </html>
      `,
        {
          waitUntil: "networkidle0"
        }
      );
      await screenshotDOMElement(page, "body > *", snap.filename, dir);
      return Promise.resolve({
        replace: snap.html
          .replace(/<style\s+data-reactroot.*?<\/style>/gims, "")
          .replace(/<style\s+data-emotion-css.*?<\/style>/gims, ""),
        with: `\n<img src="${dir}/${snap.filename}.png" />`
      });
    });
    resolve(Promise.all(replacers));
  });
const parseMetadata = (packagejson, markdown) => {
  const result = markdown.match(/{{{(.*?)}}}/g)
    ? markdown.match(/{{{(.*?)}}}/g).reduce((md, data) => {
        const property = data.replace("{{{", "").replace("}}}", "");
        return (md = md.replace(
          new RegExp(data, "g"),
          typeof packagejson[property] === "string"
            ? packagejson[property]
            : JSON.stringify(packagejson[property])
        ));
      }, markdown)
    : markdown;
  return Promise.resolve(result);
};

const stripStyles = markdown =>
  Promise.resolve(
    markdown
      .replace(/<style\s+data-reactroot.*?<\/style>/gims, "")
      .replace(/<style\s+data-emotion-css.*?<\/style>/gims, "")
  );

const replaceTags = (replacers, html) =>
  new Promise(async (resolve, reject) => {
    let markdown = await stripStyles(html);

    markdown = replacers.reduce((html, replacer) => {
      return html.replace(replacer.replace, replacer.with);
    }, markdown);

    resolve(markdown);
  });

const writeFile = (markdown, path) =>
  new Promise((resolve, reject) => {
    FS.writeFile(
      PATH.resolve(PATH.resolve(`${path.split(".jsx")[0]}.md`)),
      markdown,
      err => {
        if (err) throw err;
        resolve();
      }
    );
  });

const importFile = async path => {
  const readme = importJSX(PATH.resolve(path));
  let result;
  switch (typeof readme) {
    case "function":
      result = await readme();
      break;
    case "object":
      result = readme;
      break;
  }
  return Promise.resolve(result);
};

const generateMD = async (
  path = "./README.jsx",
  options = {
    linebreak: 2,
    assetsDir: "./readme_assets",
    packagejson: "./package.json"
  }
) => {
  await createDir(options.assetsDir);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const readme = await importFile(path);
  const packagejson = require(PATH.resolve(options.packagejson));
  const html = await getHTML(readme, options.linebreak);
  await page.setContent(html, { waitUntil: "load" });
  let markdown = await parseMetadata(packagejson, html);
  const snapshots = await evaluateHTML(browser, markdown);
  const replacers = await takeSnapshots(browser, snapshots, options.assetsDir);
  markdown = await replaceTags(replacers, markdown);
  await writeFile(markdown, path);
  return Promise.resolve();
};

module.exports = generateMD;
