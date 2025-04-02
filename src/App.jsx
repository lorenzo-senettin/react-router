import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

const NotFound = () => (
  <div style={{ padding: "2rem" }}>
    <h1>404 - Page not found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
