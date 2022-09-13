import React from "react";
import { generateId } from "../utilities/utilities";
import { useAdd } from "../context/AddNoteContext";

export default function AddNotes({ openClose }) {
  const addNote = useAdd();

  const handleSubmit = (e) => {
    e.preventDefault();
    let myNote = {
      id: "id" + generateId(),
      title: e.target[0].value,
      body: e.target[1].value,
    };
    console.log(myNote);
    myNote.title && addNote(myNote);
    openClose();
  };

  // const validate = (e) => {
  //   const regex = /[0-9]|\./;
  //   if(!regex.test(e.target)) {

  //   }
  // }

  return (
    <div className="add-note">
      <h3>Create a New Note</h3>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <input
            type="text"
            placeholder="Title"
            id="title"
            // pattern="[a-zA-Z]"
            // dir="ltr"
            // onKeyPress={validate}
          />
        </div>
        <div className="body">
          <textarea placeholder="Note Description" col="50" id="description" />
        </div>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
}
