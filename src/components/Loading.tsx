import React from "react";
import LoadingGIF from "../images/loading.gif";
import styles from "./loading.module.scss";

function Loading() {
  return (
    <div className={styles.wrapper}>
      <img src={LoadingGIF} style={{ width: "60px" }} alt="loading animation" />
    </div>
  );
}

export default Loading;
