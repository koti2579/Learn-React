import React from "react";
import ReactDOM from "react-dom/client";



const parent =React.createElement("div",{id:"parent"} ,[
   React.createElement("div",{id:"child"},[
      React.createElement("h1",{},"Hello World!"),
      React.createElement("h2",{},"Hello Koti")
   ]),
   React.createElement("div",{id:"child2"},[
      React.createElement("h1",{},"I am h1 tag"),
      React.createElement("h2",{},"I am h2 tag")
   ])
]);

   console.log(parent);
  

const jsxheading=<h1 id="heading">Hello JSX</h1>;

    const root = ReactDOM.createRoot(document.getElementById("parent"));
    root.render(jsxheading);