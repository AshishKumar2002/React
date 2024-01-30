/**
 * <div id="parent">
 *       <div id="child">
 *              <h1>Hello React</h1>
 *              <h2>Hello React</h2>
 *       </div>
 *  </div>
 * ReactElement(obejct)=>HTML(Browser understand)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react"
// );

console.log(parent); //return object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
