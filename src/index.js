import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import App from "./App";

const initialState = { todo: [], loading: false };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/start":
      return { loading: true };
    case "todo/item":
      return { todo: action.payload };
    case "todo/delete":
      const updatedTodo = state.todo.filter(
        (item, index) => index !== action.payload
      );
      return { ...state, todo: updatedTodo };

    default:
      return state;
  }
};
const store = createStore(reducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
