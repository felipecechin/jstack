import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);
  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
