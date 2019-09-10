import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className="Nav">
      <Link to={"/"}>Bookmark List</Link>
      <Link to={"add-bookmark"}>Add Bookmark</Link>
    </nav>
  );
}

/*
      <button onClick={() => props.clickPage("list")}>
        Bookmark List
      </button>{" "} 
            <button onClick={() => props.clickPage("add")}>Add Bookmark</button>

      */
