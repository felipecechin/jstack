import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Aprendendo React",
      subtitle: "Aprendendo React com Alura",
      likes: 10,
      read: false,
    },
    {
      id: Math.random(),
      title: "Aprendendo JavaScript",
      subtitle: "Aprendendo JavaScript com Alura",
      likes: 20,
      read: true,
    },
    {
      id: Math.random(),
      title: "Aprendendo CSS",
      subtitle: "Aprendendo CSS com Alura",
      likes: 30,
      read: false,
    },
    {
      id: Math.random(),
      title: "Aprendendo HTML",
      subtitle: "Aprendendo HTML com Alura",
      likes: 40,
      read: true,
    },
  ]);

  function handleRefresh() {
    setPosts((prevPosts) => {
      const newPost = {
        id: Math.random(),
        title: "Novo Post",
        subtitle: "Novo Post com Alura",
        likes: Math.floor(Math.random() * 100),
      };

      return [...prevPosts, newPost];
    });
  }

  function handleRemovePost(id) {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  }

  return (
    <>
      <Header title="Alura Cases - React">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onRemove={() => {
            handleRemovePost(post.id);
          }}
        />
      ))}
    </>
  );
}

export default App;
