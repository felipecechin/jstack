import React from "react";

export default function Post({ post, onRemove }) {
  return (
    <>
      <article>
        <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>
        <button onClick={onRemove}>Remover</button>
        <br />
        <small>{post.subtitle}</small>
        <br />
        Média: {post.likes / 2}
      </article>
      <br />
    </>
  );
}
