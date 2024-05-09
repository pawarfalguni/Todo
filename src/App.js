import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <>
      <marquee>
        <h2>TODO LIST USING REACT JS</h2>
      </marquee>
      <div className="main-container">
        <div className="center-container">
          {/* <marquee>TODO-LIST USING REACT JS</marquee> */}
          <TodoInput addList={addList} />
          <h1 className="app-heading">TODO</h1>
          <hr />
          {listTodo.map((listItem, i) => {
            return (
              <TodoList
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
