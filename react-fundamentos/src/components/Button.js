import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);
  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    border: "1px solid black",
    padding: "5px",
    cursor: "pointer",
  };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
