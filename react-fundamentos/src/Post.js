import React from "react";
import PostHeader from "./PostHeader";

export default function Post({ post, onRemove }) {
  return (
    <>
      <article>
        <PostHeader onRemove={onRemove} title={post.title} read={post.read} />
        <br />
        <small>{post.subtitle}</small>
        <br />
        Média: {post.likes / 2}
      </article>
      <br />
    </>
  );
}
