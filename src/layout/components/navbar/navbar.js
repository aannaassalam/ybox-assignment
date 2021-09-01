import React from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <h2>PostMania</h2>
      <div className="links">
        <a href="/" className={location.pathname === "/" && "active"}>
          All Posts
        </a>
        <a
          href="/newPosts"
          className={location.pathname === "/newPosts" && "active"}
        >
          New Posts
        </a>
      </div>
      <p>&copy; copyrights reserved.</p>
    </div>
  );
}

export default Navbar;
