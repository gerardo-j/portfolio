import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import AddNote from "./AddNote";
import "../NoteStyles.css"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


function App() {

    const [notes, updateNotes] = useState([]);

    return (
        <div className="note-app-body">
            <div className="project-global-heading">
                <Link className="project-global-heading" to='/'>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link className="project-global-heading" to='/'>
                    <Button color="inherit">Keeper Notes</Button>
                </Link>
                <Link className="project-global-heading" to='/'>
                    <Button color="inherit">Dice Game</Button>
                </Link>
                <Link className="project-global-heading" to='/'>
                <Button color="inherit">Simon Game</Button>
                </Link>
            </div>

            <Header />
            <AddNote onAdd={updateNotes}/>
            {notes.map( (note, index) =>
                <Note 
                    key={index}
                    id={index}
                    onDelete={updateNotes}
                    title={note.title} 
                    content= {note.content} 
                />
            )}
        </div>
    );
}

export default App;