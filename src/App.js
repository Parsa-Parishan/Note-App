import React, { useState, useRef, useEffect } from "react";
import Notes from "./components/Notes";
import AddNotes from "./components/AddNotes";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Nav from "./components/Nav";
import AddNoteContext from "./context/AddNoteContext";

function App() {
  const [note, setNote] = useState([]);
  const [active, setActive] = useState(false);
  const [transition, setTransition] = useState(false);
  const modal = useRef(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("notes"));
    if (items) {
      setNote(items);
    }
  }, []);

  const openClose = () => {
    setActive(!active);
  };

  const handleTransition = () => {
    setTransition(!transition);
  };

  return (
    <div className="App">
      <AddNoteContext>
        <Nav func={openClose} />
        <Modal
          open={active}
          onClose={openClose}
          center
          classNames={{
            overlayAnimationIn: "customEnterOverlayAnimation",
            overlayAnimationOut: "customLeaveOverlayAnimation",
            modalAnimationIn: "customEnterModalAnimation",
            modalAnimationOut: "customLeaveModalAnimation",
          }}
          animationDuration={800}
          initialFocusRef={modal}
          closeIcon={" "}
        >
          <AddNotes openClose={openClose} />
        </Modal>

        <div className="note-container">
          <Notes />
        </div>
      </AddNoteContext>
    </div>
  );
}

export default App;
