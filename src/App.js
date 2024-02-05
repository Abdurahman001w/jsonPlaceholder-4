import React, { useEffect, useState } from "react";
import { loadTodo } from "./actions";

import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
function App() {
  const todo = useSelector((state) => state.todo);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();
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
        : todo.map((item) => {
            return (
              <div className="todo">
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="title">{item.title}</div>
                <div className="action">
                  <button className="btn">Delete</button>
                </div>
              </div>
            );
          })}
    </div>
  );
}
export default App;
