<img src="./readme_assets/H1_0.png" />
<img src="./readme_assets/H1_1.png" />


![LICENSE](https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=e91e63&style=for-the-badge&logo=&logoColor=violet&link=&labelColor=black)
![VERSION](https://img.shields.io/static/v1?label=VERSION&message=0.3.0&color=e91e63&style=for-the-badge&logo=&logoColor=violet&link=&labelColor=black)



<img src="./readme_assets/H1_2.png" />


> README-JSX is a package that lets you write your README documentations in jsx, opening a multitude of new possibilities and oppurtinities to get creative. Not only that, but it also provides you with all the necessary components for writing traditional markdown without having to struggle with spacing and formatting... 

> NOTICE: This file was generated with this library, you can checkout the sourecode by viewing the README.jsx file


<img src="./readme_assets/H1_3.png" />
<img src="./readme_assets/H1_4.png" />


- [x] Complain to self  about how tedious it is to write docs in markdown

- [x] Brainstorming

- [x] Come up with a solution

- [x] Initiate project

- [x] Code solution

- [x] Test solution manually because I'm not crazy enough to write a unit test for each case

- [ ] Add gif support

- [ ] Add watch mode

- [ ] Maybe publish also a cli

- [ ] Expand on metadata

- [ ] Add custom components

- [ ] Create VS Code extension


<img src="./readme_assets/H1_5.png" />


`npm i --save-dev readme-jsx`


<img src="./readme_assets/H1_6.png" />
<img src="./readme_assets/H2_7.png" />


```jsx
// ./README.jsx
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
)
```




```jsx
// ./scripts/readme-gen.js
const { generateMD } = require("readme-jsx");
generateMD("./README.jsx").then(() => {
  console.log("README.md generated !");
  process.exit();
});
)
```




`node ./scripts/readme-gen.js`




![LICENSE](https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=blue&style=for-the-badge&logo=&logoColor=violet&link=&labelColor=black)


<img src="./readme_assets/H2_8.png" />


```jsx
// ./README.jsx
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
)
```




```jsx
// ./scripts/readme-gen.js
const { generateMD } = require("readme-jsx");
generateMD("./README.jsx").then(() => {
  console.log("README.md generated !");
  process.exit();
});
)
```




`node ./scripts/readme-gen.js`


<img src="./readme_assets/H1_9.png" />
<img src="./readme_assets/H1_10.png" />
<img src="./readme_assets/H2_11.png" />


| Component | Props | Description | Example | Preview |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| H1 |  | A basic markdown header | `<H1>A header</H1>` | # A header | 
| H2 |  | A basic markdown header | `<H2>A header</H2>` | ## A header | 
| H3 |  | A basic markdown header | `<H3>A header</H3>` | ### A header | 
| H4 |  | A basic markdown header | `<H4>A header</H4>` | #### A header | 
| H5 |  | A basic markdown header | `<H5>A header</H5>` | ##### A header | 
| H6 |  | A basic markdown header | `<H6>A header</H6>` | ##### A header | 
| ITALIC |  | Turns text italic | `<ITALIC>Italic</ITALIC>` | *Italic* | 
| BOLD |  | Turns text bold | `<BOLD>Bold</BOLD>` | **Bold** | 
| SCRATCH |  | Strikes the text | `<SCRATCH>Scratched</SCRATCH>` | ~~Scratched~~ | 
| BR |  | A line break | `<BR/>` | Doesn't show inside a table | 
| HR |  | A horizontal line | `<HR/>` | --- | 
| QUOTE |  | A quote | `<QUOTE>A thought here</QUOTE>` | Doesn't show inside a table | 
| OL | `list: { title: string, content: string[]}[]` | An ordered list | `<OL list={[{title: "First item", content: ["Lorem ipsum","Lorem ipsum"]}]} />` | Doesn't show inside a table | 
| UL | `list: { title: string, content: string[]}[]` | An unordered list | `<UL list={[{title: "First item", content: ["Lorem ipsum","Lorem ipsum"]}]} />` | Doesn't show inside a table | 
| CODE | `inline: boolean|lang: string` | A code snippet | `<CODE lang="shell">{"npm i readme-jsx"}</CODE>` | `npm i readme-jsx` | 
| A | `href: string` | A link | `<A href="https://google.com">Click me</A>` | [Click me](https://google.com) | 
| TASKS | `list: {title: string, done: boolean}[]` | A list of tasks | `<TASKS list={[{title: "Refactor", done: false}, {title: "Go to sleep", done: false}]} />` | Doesn't show inside a table | 
| COLLAPSIBLE | `title: string` | A collapsible aka accordion | `<COLLAPSIBLE  title="Show the content">The content</COLLAPSIBLE>` | <details><summary>Show the content</summary>The content</details> | 
| TABLE | `columns: string[]; rows: string[][];` | A table, like this one | `<TABLE columns=["Fruit", "Color"]  rows={[["Banana", "Yellow"],["Watermelon","Green"]]}/>` | Doesn't show inside a table | 
| IMG | `src: string ; href: string ; alt: string` | An image | `<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nuvola_emblem-favorite.svg/800px-Nuvola_emblem-favorite.svg.png"/>` | [![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nuvola_emblem-favorite.svg/800px-Nuvola_emblem-favorite.svg.png)](/) | 
| BADGE | `label: string; message: string; link: string; color: string; style: "plastic" or "flat" or "flat-square" or "for-the-badge" or "social"; logo: string; logoColor: string; labelColor: string;` | A custom badge | `<BADGE label="HELLO" message="WORLD" style="for-the-badge" color="orange" />` | ![HELLO](https://img.shields.io/static/v1?label=HELLO&message=WORLD&color=orange&style=for-the-badge&logo=&logoColor=violet&link=&labelColor=black) |



<img src="./readme_assets/H2_12.png" />


| Function | Arguments | Description | Example |
| ------------- | ------------- | ------------- | ------------- |
| generateMD | path: string, options: { linebreak: number; assetsDir: string; packagejson: string; } | The function which generates the markdown file | `generateMD("./README.jsx").then(() => { console.log("README.md generated !"); process.exit(); });` | 
| importJSX | path: string | This function is used to import jsx files inside your README.jsx, since node does not support the JSX engine by default | `const importJSX = require("import-jsx"); const Button = importJSX("../components/Button.jsx");` |



<img src="./readme_assets/H2_13.png" />


| Property | Description | Example |
| ------------- | ------------- | ------------- |
| metadata | An object which contains the list of metadata properties that can be parsed from the package.json file | `<BADGE label="LICENSE" message={metadata.license}/>` |



