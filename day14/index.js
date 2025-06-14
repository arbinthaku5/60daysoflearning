const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON (baki)
app.use(express.json());

// Dummy data store garney
let notes = [
  { id: 1, title: 'Learn Node.js' },
  { id: 2, title: 'Build REST API' }
];

// GET all notes
app.get('/', (req, res) => {
  res.send('Welcome to the Notes REST API');
});


// GET a single note by id
app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).send('Note not found');
  res.json(note);
});

// new note POST garney
app.post('/api/notes', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

//  note PUT (update) garney
app.put('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).send('Note not found');

  note.title = req.body.title;
  res.json(note);
});

// note delete garney
app.delete('/api/notes/:id', (req, res) => {
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (noteIndex === -1) return res.status(404).send('Note not found');

  const deletedNote = notes.splice(noteIndex, 1);
  res.json(deletedNote[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
