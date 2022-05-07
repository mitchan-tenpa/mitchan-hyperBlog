import React from "react";

const TODOS = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];
function Todo() {
  return (
    <div>
      <h3 className="bold text-2xl">TODO一覧</h3>
      {TODOS.map((todo) => (
        <div key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.isDone} />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Todo;
