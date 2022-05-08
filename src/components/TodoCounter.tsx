import React, { FC } from "react";
type Props = {
  todoCount: number;
};

const TodoCounter: FC<Props> = ({ todoCount }) => {
  return <h2 className="text-3xl font-bold">TODO:{todoCount}件</h2>;
};

export default TodoCounter;
