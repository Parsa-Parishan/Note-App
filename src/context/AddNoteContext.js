import React, { useContext, useState, useEffect } from "react";

const NoteContext = React.createContext();
const RemoveContext = React.createContext();
const AddContext = React.createContext();
const EditContext = React.createContext();
const AppearContext = React.createContext();

export function useNote() {
  return useContext(NoteContext);
}
export function useAdd() {
  return useContext(AddContext);
}
export function useRemove() {
  return useContext(RemoveContext);
}
export function useEdit() {
  return useContext(EditContext);
}
export function useAppear() {
  return useContext(AppearContext);
}

export default function AddNoteContext({ children }) {
  const [note, setNote] = useState([]);
  const [appear, setAppear] = useState(false);

  const addNote = (e) => {
    setAppear(() => true);
    if (appear) {
      setTimeout(() => {
        setNote(() => [e, ...note]);
      }, 500);
    } else {
      setTimeout(() => {
        setNote(() => [e, ...note]);
      }, 2000);
    }
    // setNote(() => [e, ...note]);
  };

  const removeNote = (e) => {
    setNote((note) => note.filter((w) => w.id != e));
    console.log(note);
  };

  const toEdit = (e, t, b) => {
    if (t.length == 0 && b.length == 0) {
      setNote((note) => note.filter((w) => w.id != e));
      return;
    }
    const wanted = note.find((obj) => obj.id == e);
    note[note.indexOf(wanted)].title = t;
    note[note.indexOf(wanted)].body = b;
    setNote(() => note);
  };

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(note));
  }, [note]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      console.log(data)
      setNote(() => data);
    }
  }, []);

  return (
    <AppearContext.Provider value={appear}>
      <NoteContext.Provider value={note}>
        <AddContext.Provider value={addNote}>
          <RemoveContext.Provider value={removeNote}>
            <EditContext.Provider value={toEdit}>
              {children}
            </EditContext.Provider>
          </RemoveContext.Provider>
        </AddContext.Provider>
      </NoteContext.Provider>
    </AppearContext.Provider>
  );
}
