import { NextPage } from "next";
import React, { Dispatch, SetStateAction } from "react";
import { Todo } from "src/types";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Todo: NextPage<Props> = ({ todos, setTodos }) => {
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
