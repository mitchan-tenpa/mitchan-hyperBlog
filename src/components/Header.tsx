import Link from "next/link";
import React, { FC, useContext } from "react";
import TodoCounter from "src/components/TodoCounter";
import { ThemeContext } from "src/pages/_app";

type Props = {
  todoCount: number;
};

const Header: FC<Props> = ({ todoCount }) => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <header className="border-b border-gray-300 py-8">
      <h1 className="text-5xl font-bold">
        <Link href="/">
          <a>MTZのスーパーブログ</a>
        </Link>
      </h1>
      <div className="flex">
        <Link href="/Todo">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
      </div>
      <TodoCounter todoCount={todoCount} />
    </header>
  );
};

export default Header;
