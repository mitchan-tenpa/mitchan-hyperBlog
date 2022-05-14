import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { TodoContext } from "src/pages/_app";
import { Todo } from "src/types";

const Todo: NextPage = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <h3 className="bold text-2xl">TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Todo;
