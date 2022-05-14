import { NextPage } from "next";
import React, { ComponentProps, useContext } from "react";
import { TodoContext } from "src/pages/_app";
import { Todo } from "src/types";

const Add: NextPage = () => {
  const { setTodos } = useContext(TodoContext);
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
    event.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          autoComplete="off"
          required
          className="border-2"
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
