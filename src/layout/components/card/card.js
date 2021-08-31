import React from "react";
import "./card.css";

function Card({ post }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default Card;
