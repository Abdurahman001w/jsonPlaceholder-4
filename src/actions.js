export function loadTodo() {
  return function (dispatch) {
    dispatch({ type: "todo/start" });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "todo/item", payload: json });
      });
  };
}
export const deleteTodo = (index) => {
  return {
    type: "DELETE_TODO",
    payload: {
      index,
    },
  };
};
