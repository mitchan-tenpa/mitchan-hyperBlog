import Link from "next/link";
import React, { FC } from "react";
import TodoCounter from "src/components/TodoCounter";

type Props = {
  todoCount: number;
};

const Header: FC = () => {
  return (
    <header className="border-b border-gray-400 py-8">
      <div className="h-5% flex flex-col p-3 ">
        <h1 className="m-auto text-5xl font-bold">
          <Link href="/">
            <a>MTZ</a>
          </Link>
        </h1>
        <p className="m-auto">重いよ届け</p>
      </div>
    </header>
  );
};

export default Header;
