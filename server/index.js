const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const DB = require('./config/db');
DB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/users'));
app.use('/api/favorites', require('./routes/favorites'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log('SERVER ON')
})