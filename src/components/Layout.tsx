import React, { FC, ReactNode } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Profile from "src/components/profile";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex w-full justify-between">
        <main className="mx-auto flex w-full flex-col p-3">{children}</main>
        <Profile />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
