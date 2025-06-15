const express = require('express');
const router = express.Router();

// Dummy notes array
let notes = [
  { id: 1, title: "Note One" },
  { id: 2, title: "Note Two" }
];

// GET all notes
router.get('/', (req, res) => {
  res.json(notes);
});

// GET note by ID
router.get('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).send("Note not found");
  res.json(note);
});

// POST new note
router.post('/', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// PUT update note
router.put('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).send("Note not found");

  note.title = req.body.title;
  res.json(note);
});

// DELETE note
router.delete('/:id', (req, res) => {
  const index = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Note not found");

  const deleted = notes.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
