const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/learningDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to local MongoDB'))
.catch((err) => console.error(' MongoDB connection error:', err));



// revised the CRUD using mongosh