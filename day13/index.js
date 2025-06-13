const express = require('express');
const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Custom middleware (logging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes yeta bata
app.get('/', (req, res) => {
  res.send('Hello I am Cristiano Ronaldo!');
});

app.get('/api/user', (req, res) => {
  res.json({ name: "Mister Thaku", role: "Learner", day: 13 });
});

// server start yesma
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
