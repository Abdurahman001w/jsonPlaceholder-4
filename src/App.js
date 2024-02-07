import React, { useEffect, useState } from "react";
import { loadTodo } from "./actions";
import { deleteTodo } from "./actions";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todo = useSelector((state) => state.todo);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  useEffect(() => {
    dispatch(loadTodo());
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      {loading
        ? "Loading..."
        : todo.map((item, index) => {
            return (
              <div key={index} className="todo">
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="title">{item.title}</div>
                <div className="action">
                  <button onClick={() => handleDelete(index)} className="btn">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
}
export default App;
