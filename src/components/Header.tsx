import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "src/pages/_app";

function Header() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <header className="border-b border-gray-300 py-8">
      <Link href="/">
        <a>
          <h1 className="text-5xl font-bold">みっつつあんのブログん</h1>
        </a>
      </Link>
    </header>
  );
}

export default Header;
