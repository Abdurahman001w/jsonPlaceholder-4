import React, { useEffect, useState } from "react";
import { loadTodo } from "./actions";
import { deleteTodo } from "./actions";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todo = useSelector((state) => state.todo);
  const loading = useSelector((state) => state.loading);
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    if (checked.includes(index)) {
      setChecked(checked.filter((item) => item !== index));
    }
    dispatch(deleteTodo(index));
  };

  const handleCheckboxChange = (index) => {
    if (checked.includes(index)) {
      setChecked(checked.filter((item) => item !== index));
    } else {
      setChecked([...checked, index]);
    }
  };
  useEffect(() => {
    dispatch(loadTodo());
  }, []);

  useEffect(() => {}, []);

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
                <input
                  type="checkbox"
                  name="coding-notes"
                  checked={checked.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
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
