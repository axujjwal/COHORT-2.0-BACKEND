const express = require("express");

const app = express();

app.use(express.json());


const notes = [];


app.get("/", (req, res) => {
  res.send("Notes API is running");
});

// for Creating a note
app.post("/notes", (req, res) => {
  const note = {
    id: Date.now(), 
    title: req.body.title,
    content: req.body.content,
  };

  notes.push(note);
  res.status(201).json(note);
});

// Get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Update a note
app.put("/notes/id:", (req, res) => {
  const noteId = Number(req.params.id);

  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  note.title = req.body.title || note.title;
  note.content = req.body.content || note.content;

  res.json(note);
});

// Delete a note
app.delete("/notes/id:", (req, res) => {
  const noteId = Number(req.params.id);

  const index = notes.findIndex((n) => n.id === noteId);

  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(index, 1);
  res.json({ message: "Note deleted successfully" });
});

module.exports = app;
