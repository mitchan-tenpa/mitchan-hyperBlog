import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Todo } from "src/types";
import Layout from "src/components/Layout";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const TodoContext = createContext<{
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}>({
  todos: TODOS,
  setTodos: () => {
    throw Error("No default value!");
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="mx-auto max-w-screen-xl">
        <Layout>
          <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </Layout>
      </div>
    </TodoContext.Provider>
  );
}

export default MyApp;
