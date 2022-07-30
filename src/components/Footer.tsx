import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-4 flex h-24 w-full items-center justify-center border-t border-gray-300">
      <small>
        &copy;{`${new Date().getFullYear()} MTZ All rights reserved.`}
      </small>
    </footer>
  );
};

export default Footer;
