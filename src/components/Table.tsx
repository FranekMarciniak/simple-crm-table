import React from "react";
import styles from "./table.module.scss";
type Props = {
  children?: JSX.Element | JSX.Element[];
};

function Table({ children }: Props) {
  return <section className={styles.table__container}>{children}</section>;
}

export default Table;
