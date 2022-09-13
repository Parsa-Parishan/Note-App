import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { useAppear } from "../context/AddNoteContext";

export default function Nav({ func }) {
  const appear = useAppear();
  return (
    <div className={`nav ${appear && "appear"}`}>
      <div>My Notes</div>
      <div>
        <FaRegPlusSquare onClick={() => func()} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
