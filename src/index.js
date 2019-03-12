import React from "react";
import ReactDOM from "react-dom";

const title = "Bonessss";
const App = document.getElementById("app");

ReactDOM.render(<div>{title}</div>, App);

module.hot.accept();
