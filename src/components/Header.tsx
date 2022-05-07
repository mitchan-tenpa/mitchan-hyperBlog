import Link from "next/link";
import React, { FC, useContext } from "react";
import { ThemeContext } from "src/pages/_app";

const Header: FC = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <header className="border-b border-gray-300 py-8">
      <h1 className="text-5xl font-bold">
        <Link href="/">
          <a>MTZのブログ</a>
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
      <h2 className="text-3xl font-bold">TODO:2件</h2>
    </header>
  );
};

export default Header;
