import React, { useState } from "react";
import DropArea from "../DropArea";
import DragItem from "../DragItem";

export default function Todos(props) {
  const [todoValues, setTodoValues] = useState(props.todos);
  const [columns] = useState(props.stateColumns);

  return (
    <div className="box">
      {columns.length > 0 && Object.keys(todoValues).length > 0
        ? // loop thru columns and create columns with current items:
          columns.map((column, columnIndex) => (
            <DropArea
              heading={column}
              onDrop={id => {
                // copy current todo
                const currentTodo = { ...todoValues[id] };
                // update current todo
                currentTodo.state = column;
                currentTodo.column = columnIndex;
                // set updated todo to state
                setTodoValues({ ...todoValues, ...{ [id]: currentTodo } });
              }}
            >
              {Object.keys(todoValues)
                // add ids to all todos:
                .map((key, index) => ({
                  id: key,
                  index: key,
                  ...todoValues[key]
                }))
                .filter(todo => todo.column === columnIndex) // filter todos into columns
                .map(
                  todo => (
                    // render final todo
                    <DragItem id={todo.id} data={todo} key={todo.id} />
                  )
                  // &&console.log(todo)
                )}
            </DropArea>
          ))
        : null}
    </div>
  );
}
