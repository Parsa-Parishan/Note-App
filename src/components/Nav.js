import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";

export default function Nav({ func }) {
  return (
    <div className="nav">
      <div>My Notes</div>
      <div>
        <FaRegPlusSquare onClick={() => func()} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
