import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const DATA = [
  { id: "todo-0", name: "Wake up", completed: true },
  { id: "todo-1", name: "Code", completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);
