import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from Abhijit !"
);

const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Hello From JSX
  </h1>
);

console.log(jsxHeading); //this is an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); //render converts this object into the h1 tag element.
