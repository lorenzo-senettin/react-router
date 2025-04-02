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

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Torna indietro</button>
    </div>
  );
};

export default PostDetail;
