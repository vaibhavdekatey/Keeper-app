import React,{ useState } from 'react'
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const[notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(preNotes => {
      return [...preNotes, note];

    })

  }

  function deleteNote (id) {
    setNotes(preNotes => {
      return preNotes.filter((noteItem, index) => {
        return index !==id;
      })
    })
  }


  return (
    <div>
      <Header />
      <CreateArea 
      onAdd = {addNote}
      />
      {notes.map((noteItem, index) => {
        return <Note 
        key = {index} 
        id = {index}
        title={noteItem.title}
        content= {noteItem.content}
        onDelete = {deleteNote}

        />

      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
