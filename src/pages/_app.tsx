import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";
import Header from "src/components/Header";

export const ThemeContext = createContext("light");

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="mx-auto max-w-prose">
        <Header />
        <main className="mt-8">
          <button
            onClick={() => {
              setTheme((prev) => (prev === "dark" ? "light" : "dark"));
            }}
          >
            テーマ切り替え
          </button>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
