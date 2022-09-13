import React, { useState } from "react";
import { FaWindowClose, FaEdit, FaRegCheckCircle } from "react-icons/fa";
import { useNote, useRemove, useEdit } from "../context/AddNoteContext";

export default function Notes() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  let note = useNote();
  const removeNote = useRemove();
  const handleEdit = useEdit();

  const handleModal = (e) => {
    if (document.querySelector(`.${e}`).className == `modal ${e}`) {
      document.querySelector(`.${e}`).className = `modal ${e} show`;
    } else {
      document.querySelector(`.${e}`).className = `modal ${e}`;
    }
    setShow(true);
  };

  {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  const handleId = (e) => {
    setId(() => e);
    console.log(id);
  };

  const editNote = (e) => {
    setEdit(!edit);
    handleId(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(id, e.target[0].value, e.target[1].value);
    setEdit(!edit);
  };

  return (
    <>
      {note &&
        note.map((e) => {
          return (
            <div key={e.id}>
              <div className="note" onClick={() => handleModal(e.id)}>
                <h3
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {e.title}
                </h3>
                <p>{e.body}</p>
              </div>
              <div className={`modal ${e.id}`}>
                <div className={`body`}>
                  <div className="icons">
                    {!edit && (
                      <FaWindowClose
                        onClick={() => handleModal(e.id)}
                        className="close"
                      />
                    )}
                    {!edit && <FaEdit onClick={() => editNote(e.id)} />}
                  </div>
                  {!edit ? (
                    <>
                      <h2>{e.title}</h2>
                      <p>{e.body}</p>
                      <button
                        className="dlt-btn"
                        onClick={() => removeNote(e.id)}
                      >
                        DELETE
                      </button>
                    </>
                  ) : (
                    <form className="edit" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        defaultValue={e.title}
                        className="title"
                        required="required"
                        dir="ltr"
                        style={{ fontSize: "1.5rem" }}
                      />
                      <textarea
                        defaultValue={e.body}
                        className="body"
                        // onChange={handleBody}
                      ></textarea>
                      <input type="submit" className="submit" />
                    </form>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
