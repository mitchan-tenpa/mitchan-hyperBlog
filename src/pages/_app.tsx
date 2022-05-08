import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";
import Header from "src/components/Header";
import { Todo } from "src/types";
import Layout from "src/components/Layout";

export const ThemeContext = createContext("light");
const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="mx-auto max-w-prose">
        <Layout todoCount={todos.length}>
          <button
            onClick={() => {
              setTheme((prev) => (prev === "dark" ? "light" : "dark"));
            }}
          >
            テーマ切り替え
          </button>
          <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
