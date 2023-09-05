import React, { useState } from "react";
import "./styles.css";
import logo from "./noteapplogo.jpg";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSaveNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <div className="banner">
          <h2>Welcome to the Notes App</h2>
        </div>
        <h1>Notes App</h1>
        <img className="logo" src={logo} alt="Logo" />
        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="search-box">
          <label className="search-label">Search:</label>
          <input
            className="search-input"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </header>
      <div className="notes-page">
        <div className="note-list">
          <h2>Notes</h2>
          {filteredNotes.map((note, index) => (
            <div className="note-item" key={index}>
              <h3 className="note-title">Note {index + 1}</h3>
              <p>{note}</p>
              <p className="note-timestamp">
                Created: {new Date().toLocaleString()}
              </p>
              <button
                className="delete-button"
                onClick={() => handleDeleteNote(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="note-editor">
          <h2>Create Note</h2>
          <textarea
            className="text-editor"
            placeholder="Write your note..."
            value={newNote}
            onChange={handleInputChange}
          ></textarea>
          <button className="save-note-button" onClick={handleSaveNote}>
            Save Note
          </button>
        </div>
      </div>
      <footer>
        {/* <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
        <p>&copy; 2023 Notes App. All rights reserved by FARHAN ALI.</p>
      </footer>
    </div>
  );
}

export default App;
