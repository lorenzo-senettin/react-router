import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`} className="post-link">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
