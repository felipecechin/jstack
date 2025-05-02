import styles from "./Header.scss";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <button onClick={onToggleTheme}>Mudar tema</button>
      {children}
    </>
  );
}
