import React, { ReactNode } from "react";
import Head from "next/head";
import cl from "../styles/layout.module.scss";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className={cl.wrapper}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1>How far has Billy Rocket Travelled?</h1>
    </header>
    {children}
    <footer>
      <hr />
      <span>
        If you have seen this man, please contact authorities immediately.
        Source:{" "}
        <a
          href="https://eddler.se/lektioner/problemlosning-med-derivata/"
          target="_blank"
        >
          Eddler
        </a>
      </span>
    </footer>
  </div>
);

export default Layout;
