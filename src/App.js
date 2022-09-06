import React, { useState } from "react";
import Notes from "./components/Notes";
import { FaPencilAlt } from "react-icons/fa";

function App() {
  const [note, setNote] = useState([
    {
      a: 1,
      b: "Developers frequently use localStorage for adding a dark mode feature to an application, saving a to-do item, or persisting a user's form input values, among many other scenarios.",
    },
  ]);

  const addNote = (e) => {
    setNote((note) => [e, ...note]);
  };

  return (
    <div className="App">
      <FaPencilAlt
        onClick={() =>
          addNote({
            a: 3,
            b: "Developers frequently use localStorage for adding a dark mode feature to an application, saving a to-do item, or persisting a user's form input values, among many other scenarios.",
          })
        }
      />
      <h1>Note App</h1>
      <Notes note={note} />
    </div>
  );
}

export default App;
