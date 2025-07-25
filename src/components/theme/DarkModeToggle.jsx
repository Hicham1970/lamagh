"use client"; 

import { useContext } from "react";
import styles from "./page.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icons}>🌙</div>
      <div className={styles.icons}>☀️</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
