import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Todos";

import DragItem from "./components/DragItem";
import DropArea from "./components/DropArea";

import "./styles.css";

const todos = {
  1: {
    text: "First thing",
    state: "todo",
    column: 0
  },
  2: {
    text: "Second thing",
    state: "todo",
    column: 1
  },
  3: {
    text: "Third thing",
    state: "todo",
    column: 1
  },
  4: {
    text: "Fourth thing",
    state: "todo",
    column: 2
  }
};
const stateColumns = ["todos", "wip", "done"];

function App() {
  return (
    <div className="App">
      <Todos todos={todos} stateColumns={stateColumns} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
