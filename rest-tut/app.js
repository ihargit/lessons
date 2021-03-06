const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv/config');

//Middleware
// Allow cross domain requests
app.use(cors());

// Allow body parsing
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

//Connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('connected to DB!')
);

// How to we start listening to the server
app.listen(3000);