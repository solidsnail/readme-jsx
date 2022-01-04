const React = require("react");
const {
  metadata,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  UL,
  IMG,
  BOLD,
  ITALIC,
  OL,
  SCRATCH,
  BR,
  HR,
  A,
  CODE,
  QUOTE,
  COLLAPSIBLE,
  TASKS,
  BADGE,
  TABLE,
  importJSX
} = require("./src");


const Header = ({ children }) => (
  <h1 className="header">{children}</h1>
);

const Subheader = ({ children }) => (
  <h2 className="subheader">{children}</h2>
);

const CustomHeader = ({ title, color }) => (
  <h1 className="custom-header" style={{ WebkitTextFillColor:color }}>{title}</h1>
)

const Logo = ({  }) => (
  <h1 id="logo">
    <span>README</span>{"  -  "}<span>JSX</span>
    </h1>
);

const Description = ({  }) => (
  <h1 id="description">
    <span>{metadata.description}</span>
    </h1>
);

const theme = {
  primaryFont: "Raleway",
  secondaryFont: "Pacifico",
  primaryColor: "#009688"
}

module.exports = (
  <React.Fragment>
    <style>
      {`
      @import url('https://fonts.googleapis.com/css?family=${theme.primaryFont}:100|${theme.secondaryFont}&display=swap');
      .custom-header{
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: black;
         color:red;
        font-family: ${theme.secondaryFont};
        width: 880px;
        font-size: 3em;
        padding: 0px 0px 10px 10px;
        display: flex;
        margin: 0px;
        align-items: center;
      }
      #logo {
        width: 880px;
        height: 180px;
        margin: 0px;
        font-size: 8em;
        display: flex;
        font-weight:100;
        justify-content: center;
        align-items: center;
        padding: 0px;
        color: black;
        font-family: "${theme.primaryFont}";
        // text-shadow: 0 0.1em 20px black, 0.05em -0.03em 0 black, 0.05em 0.005em 0 black, 0em 0.08em 0 black, 0.05em 0.08em 0 black, 0px -0.03em 0 black, -0.03em -0.03em 0 black, -0.03em 0.08em 0 black, -0.03em 0 0 black;
      }
      #description{
        padding: 0px 0px 40px 0px;
        width: 880px;
        height: 70px;
        margin: 0px;
        display: flex;
        font-weight:800;
        justify-content: center;
        align-items: center;
        color: ${theme.primaryColor};
        font-family: "${theme.primaryFont}";
        font-size: 1.6em;
      }
      .header {
        width: 880px;
        height: 50px;
        margin: 0px;
        font-size: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        color: white;
        background: black;
        font-family: "${theme.primaryFont}";
        text-transform: uppercase;
      }
      .subheader {
        width: 880px;
        height: 40px;
        margin: 0px;
        font-size: 1.5em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 5px;
        color: white;
        font-family: "${theme.primaryFont}";
        background: ${theme.primaryColor};
        text-transform: uppercase;
        border-top: 3px solid black;
      }
      `}
    </style>
    <Logo /><BR />
  <Description /><BR />


  <BADGE label="LICENSE" message={metadata.license} style="for-the-badge" color="e91e63" />
  <BADGE label="VERSION" message={metadata.version} style="for-the-badge" color="e91e63" />
 
  <BR /><BR/>
  <Header>About</Header><BR/>
  <QUOTE>README-JSX is a package that lets you write your README documentations in jsx, opening a multitude of new possibilities and oppurtinities to get creative.
   Not only that, but it also provides you with all the necessary components for writing traditional markdown without having to struggle with spacing and formatting... </QUOTE>
   <QUOTE>NOTICE: This file was generated with this library, you can checkout the sourecode by viewing the README.jsx file</QUOTE><BR/>
   <Header>Showcase</Header><BR/>
   <Header>Installation</Header><BR/>
   <CODE lang="shell">{`npm i --save-dev readme-jsx`}</CODE><BR/>
   <Header>Usage</Header><BR/>
   <Subheader>Basic</Subheader><BR/>
   <CODE inline={false} lang="jsx">{`// ./README.jsx
const React = require("react");
const { BADGE, metadata} = require("readme-jsx");

module.exports = (
  <React.Fragment>
    <BADGE 
    label="LICENSE" 
    message={metadata.license} 
    style="for-the-badge" 
    color="blue" />
  </React.Fragment>
)`}</CODE><BR/>
   <CODE inline={false} lang="jsx">{`// ./scripts/readme-gen.js
const { generateMD } = require("readme-jsx");
generateMD("./README.jsx").then(() => {
  console.log("README.md generated !");
  process.exit();
});
)`}</CODE><BR/>
   <CODE  lang="shell">{`node ./scripts/readme-gen.js`}</CODE><BR/>
<BADGE 
    label="LICENSE" 
    message={metadata.license} 
    style="for-the-badge" 
    color="blue" /><BR/>
       <Subheader>Advanced</Subheader><BR/>
       <CODE inline={false} lang="jsx">{`// ./README.jsx
const React = require("react");
const { metadata} = require("readme-jsx");

const CustomHeader = ({ title, color }) => (
  <h1 className="custom-header" style={{ WebkitTextFillColor:color }}>{title}</h1>
)
module.exports = (
  <React.Fragment>
    <style>
    @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
    .custom-header{
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: black;
       color:red;
      font-family: Pacifico;
      width: 880px;
      font-size: 3em;
      padding: 0px 0px 10px 10px;
      display: flex;
      margin: 0px;
      align-items: center;
    }
    </style>
    <CustomHeader title={metadata.name} color="yellow"/>
  </React.Fragment>
)`}</CODE><BR/>
   <CODE inline={false} lang="jsx">{`// ./scripts/readme-gen.js
const { generateMD } = require("readme-jsx");
generateMD("./README.jsx").then(() => {
  console.log("README.md generated !");
  process.exit();
});
)`}</CODE><BR/>
   <CODE  lang="shell">{`node ./scripts/readme-gen.js`}</CODE><BR/>
   <CustomHeader title={metadata.name} color="yellow" /><BR/>
       <Header>API</Header><BR/>
       <Subheader>Components</Subheader><BR/>
       <TABLE columns={["Component", "Props", "Description", "Example", "Preview"]} rows={[
         ["H1", "", "A basic markdown header", <CODE lang="jsx">{`<H1>A header</H1>`}</CODE>, <H1>A header</H1>],
         ["H2", "", "A basic markdown header", <CODE lang="jsx">{`<H2>A header</H2>`}</CODE>, <H2>A header</H2>],
         ["H3", "", "A basic markdown header", <CODE lang="jsx">{`<H3>A header</H3>`}</CODE>, <H3>A header</H3>],
         ["H4", "", "A basic markdown header", <CODE lang="jsx">{`<H4>A header</H4>`}</CODE>, <H4>A header</H4>],
         ["H5", "", "A basic markdown header", <CODE lang="jsx">{`<H5>A header</H5>`}</CODE>, <H5>A header</H5>],
         ["H6", "", "A basic markdown header", <CODE lang="jsx">{`<H6>A header</H6>`}</CODE>, <H6>A header</H6>],
         ["ITALIC", "", "Turns text italic", <CODE lang="jsx">{`<ITALIC>Italic</ITALIC>`}</CODE>, <ITALIC>Italic</ITALIC>],
         ["BOLD", "", "Turns text bold", <CODE lang="jsx">{`<BOLD>Bold</BOLD>`}</CODE>, <BOLD>Bold</BOLD>],
         ["SCRATCH", "", "Strikes the text", <CODE lang="jsx">{`<SCRATCH>Scratched</SCRATCH>`}</CODE>, <SCRATCH>Scratched</SCRATCH>],
         ["BR", "", "A line break", <CODE lang="jsx">{`<BR/>`}</CODE>, "Doesn't show inside a table"],
         ["HR", "", "A horizontal line", <CODE lang="jsx">{`<HR/>`}</CODE>, <HR/>],
         ["QUOTE", "", "A quote", <CODE lang="jsx">{`<QUOTE>A thought here</QUOTE>`}</CODE>, "Doesn't show inside a table"],
         ["OL", <CODE>{`list: { title: string, content: string[]}[]`}</CODE>, "An ordered list", <CODE lang="jsx">{`<OL list={[{title: "First item", content: ["Lorem ipsum","Lorem ipsum"]}]} />`}</CODE>, "Doesn't show inside a table"],
         ["UL", <CODE>{`list: { title: string, content: string[]}[]`}</CODE>, "An unordered list", <CODE lang="jsx">{`<UL list={[{title: "First item", content: ["Lorem ipsum","Lorem ipsum"]}]} />`}</CODE>, "Doesn't show inside a table"],
         ["CODE", <CODE>{`inline: boolean|lang: string`}</CODE>, "A code snippet", <CODE lang="jsx">{`<CODE lang="shell">{"npm i readme-jsx"}</CODE>`}</CODE>,<CODE lang="shell">{"npm i readme-jsx"}</CODE>],
         ["A", <CODE>{`href: string`}</CODE>, "A link", <CODE lang="jsx">{`<A href="https://google.com">Click me</A>`}</CODE>,<A href="https://google.com">Click me</A>],
         ["TASKS", <CODE>{`list: {title: string, done: boolean}[]`}</CODE>, "A list of tasks", <CODE lang="jsx">{`<TASKS list={[{title: "Refactor", done: false}, {title: "Go to sleep", done: false}]} />`}</CODE>,"Doesn't show inside a table"],
         ["COLLAPSIBLE", <CODE>{`title: string`}</CODE>, "A collapsible aka accordion", <CODE lang="jsx">{`<COLLAPSIBLE  title="Show the content">The content</COLLAPSIBLE>`}</CODE>,<COLLAPSIBLE  title="Show the content">The content</COLLAPSIBLE>],
         ["TABLE", <CODE>{`columns: string[]; rows: string[][];`}</CODE>, "A table, like this one", <CODE lang="jsx">{`<TABLE columns=["Fruit", "Color"]  rows={[["Banana", "Yellow"],["Watermelon","Green"]]}/>`}</CODE>,"Doesn't show inside a table"],
         ["IMG", <CODE>{`src: string ; href: string ; alt: string`}</CODE>, "An image", <CODE lang="jsx">{`<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nuvola_emblem-favorite.svg/800px-Nuvola_emblem-favorite.svg.png"/>`}</CODE>,<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nuvola_emblem-favorite.svg/800px-Nuvola_emblem-favorite.svg.png"/>],
         ["BADGE", <CODE>{`label: string; message: string; link: string; color: string; style: "plastic" or "flat" or "flat-square" or "for-the-badge" or "social"; logo: string; logoColor: string; labelColor: string;`}</CODE>, "A custom badge", <CODE lang="jsx">{`<BADGE label="HELLO" message="WORLD" style="for-the-badge" color="orange" />`}</CODE>,<BADGE label="HELLO" message="WORLD" style="for-the-badge" color="orange" />],
       ]} /><BR/>
       <Subheader>Functions</Subheader><BR/>
       <TABLE columns={["Function", "Arguments", "Description", "Example"]} rows={[
         ["generateMD", "path: string, options: { linebreak: number; assetsDir: string; packagejson: string; }","The function which generates the markdown file", <CODE>{`generateMD("./README.jsx").then(() => { console.log("README.md generated !"); process.exit(); });`}</CODE>],
         ["importJSX", "path: string","This function is used to import jsx files inside your README.jsx, since node does not support the JSX engine by default", <CODE>{`const importJSX = require("import-jsx"); const Button = importJSX("../components/Button.jsx");`}</CODE>],
         ]} /><BR/>
       <Subheader>Properties</Subheader><BR/>
       <TABLE columns={["Property", "Description", "Example"]} rows={[
         ["metadata", "An object which contains the list of metadata properties that can be parsed from the package.json file", <CODE>{`<BADGE label="LICENSE" message={metadata.license}/>`}</CODE>]
         ]} /><BR/>
    
  </React.Fragment>
);
