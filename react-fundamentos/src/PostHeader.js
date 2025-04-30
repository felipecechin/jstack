import React from "react";
import Button from "./Button";

export default function PostHeader({ onRemove, title, read }) {
  return (
    <>
      <strong>{read ? <s>{title}</s> : title}</strong>
      <Button onClick={onRemove}>Remover</Button>
    </>
  );
}
