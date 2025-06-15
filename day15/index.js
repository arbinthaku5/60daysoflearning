const express = require('express');
const app = express();
const PORT = 3000;

const notesRoutes = require('./routes/notes');

app.use(express.json()); // Parse JSON body
app.use('/api/notes', notesRoutes); // Mount routes

app.get('/', (req, res) => {
  res.send('Welcome to my first Mini Project');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
