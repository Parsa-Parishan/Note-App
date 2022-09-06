import React from "react";

export default function Notes(note) {
  console.log(note[0]);
  return (
    <div className="note-container">
      {note.note.map((e) => {
        return (
          <div key={e.a}>
            <h1>{e.a}</h1>
            <p>{e.b}</p>
          </div>
        );
      })}
    </div>
  );
}
