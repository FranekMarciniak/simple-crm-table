import React from "react";
import styles from "./layout.module.scss";
type Props = {
  children?: JSX.Element | JSX.Element[];
};

function Layout({ children }: Props) {
  return (
    <>
      <header className={styles.title}>
        <h1>Example CRM</h1>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default Layout;
