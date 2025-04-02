import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        setError("Error", err.message);
      });
  }, [postId]);

  if (error) return <p>Errore: {error}</p>;
  if (!post) return <p>Caricamento...</p>;

  return (
    <div className="post-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        Torna indietro
      </button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
