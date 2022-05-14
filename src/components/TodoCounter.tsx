import React, { FC, useContext } from "react";
import { TodoContext } from "src/pages/_app";

const TodoCounter: FC = () => {
  const { todos } = useContext(TodoContext);
  return <h2 className="text-3xl font-bold">TODO:{todos.length}件</h2>;
};

export default TodoCounter;
