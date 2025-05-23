import React, { useState, createContext } from "react";
import Header from "../Header";
import Post from "../Post";
import { ThemeProvider } from "../../context/ThemeContext";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Aprendendo React",
      subtitle: "Aprendendo React com Alura",
      likes: 10,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Aprendendo JavaScript",
      subtitle: "Aprendendo JavaScript com Alura",
      likes: 20,
      read: true,
      removed: true,
    },
    {
      id: Math.random(),
      title: "Aprendendo CSS",
      subtitle: "Aprendendo CSS com Alura",
      likes: 30,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Aprendendo HTML",
      subtitle: "Aprendendo HTML com Alura",
      likes: 40,
      read: true,
      removed: false,
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
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return { ...post, removed: true };
        }
        return post;
      });
    });
  }

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
