import React, { useContext } from "react";
import Button from "../Button";
import { ThemeContext } from "../../context/ThemeContext";

import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {children}
    </>
  );
}
