import React from "react";
import PostHeader from "./PostHeader";

import styles from "./Post.scss";

export default function Post({ post, onRemove }) {
  return (
    <article className={post.removed ? styles.postDeleted : styles.post}>
      <PostHeader onRemove={onRemove} title={post.title} read={post.read} />
      <br />
      <small>{post.subtitle}</small>
      <br />
      Média: {post.likes / 2}
    </article>
  );
}
