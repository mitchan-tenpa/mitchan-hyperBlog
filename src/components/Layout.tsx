import React, { FC, ReactNode } from "react";
import Header from "src/components/Header";

type Props = {
  children: ReactNode;
  todoCount: number;
};

const Layout: FC<Props> = ({ children, todoCount }) => {
  return (
    <>
      <Header todoCount={todoCount} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
