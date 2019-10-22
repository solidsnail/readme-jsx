const importJSX = require("import-jsx");
const ReactDOMServer = require("react-dom/server");
const he = require("he");
const generateMD = require("./api");

module.exports = {
  generateMD,
  importJSX,
  metadata: {
    name: "{{{name}}}",
    description: "{{{description}}}",
    version: "{{{version}}}",
    keywords: "{{{keywords}}}",
    author: "{{{author}}}",
    license: "{{{license}}}",
    dependencies: "{{{dependencies}}}",
    homepage: "{{{homepage}}}",
    scripts: "{{{scripts}}}"
  },
  H1: function({ children }) {
    return `# ${children}`;
  },
  H2: function({ children }) {
    return `## ${children}`;
  },
  H3: function({ children }) {
    return `### ${children}`;
  },
  H4: function({ children }) {
    return `#### ${children}`;
  },
  H5: function({ children }) {
    return `##### ${children}`;
  },
  H6: function({ children }) {
    return `##### ${children}`;
  },
  ITALIC: function({ children }) {
    return `*${children}*`;
  },
  BOLD: function({ children }) {
    return `**${children}**`;
  },
  SCRATCH: function({ children }) {
    return `~~${children}~~`;
  },
  OL: function({ list }) {
    return list.map(
      (item, i) =>
        `\n${i + 1}. ${item.title}${
          item.content && item.content.length
            ? item.content.map(c => `\n   - ${c}`).join("")
            : ""
        }`
    );
  },
  UL: function({ list }) {
    return list.map(
      item =>
        `\n* ${item.title}${
          item.content && item.content.length
            ? item.content.map(c => `\n   - ${c}`).join("")
            : ""
        }`
    );
  },
  BR: function() {
    return "\n";
  },
  HR: function() {
    return "---";
  },
  QUOTE: function({ children }) {
    return `> ${children}`;
  },
  CODE: function({ children, inline = true, lang = "jsx" }) {
    return inline ? `\`${children}\`` : `\`\`\`${lang}\n${children}\n\`\`\``;
  },
  A: function({ children, href = "" }) {
    return `[${children}](${href})`;
  },
  TASKS: function({ list }) {
    return list.map(item => `- [${item.done ? "x" : " "}] ${item.title}`);
  },
  COLLAPSIBLE: function({ title, children }) {
    return `<details><summary>${he.decode(
      ReactDOMServer.renderToString(title)
    )}</summary>${he.decode(
      ReactDOMServer.renderToString(children)
    )}</details>`;
  },
  TABLE: function({ columns, rows }) {
    return `| ${columns
      .map(column => he.decode(ReactDOMServer.renderToString(column)))
      .join(" | ")} |\n| ${columns
      .map(column => `-------------`)
      .join(" | ")} |\n${rows
      .map(
        row =>
          "| " +
          row
            .map(cell => he.decode(ReactDOMServer.renderToString(cell)))
            .join(" | ")
      )
      .join(" | \n")} |\n`;
  },
  IMG: function({ src, href = "", alt = "" }) {
    return href
      ? `[![${alt}](${src})](${href}/)`
      : `<img alt="${alt}" src="${src}" />`;
  },
  BADGE: function({
    label = "",
    message = "",
    link = "",
    color = "green",
    style = "plastic",
    logo = "",
    logoColor = "violet",
    labelColor = "black"
  }) {
    return `![${label}](https://img.shields.io/static/v1?label=${label}&message=${message}&color=${color}&style=${style}&logo=${logo}&logoColor=${logoColor}&link=${link}&labelColor=${labelColor})`;
  }
};
