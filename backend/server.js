const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');
const campgroundRoutes = require('./routes/campgroundRoutes');

server.use(bodyParser.json());
server.use(cors());

server.use(campgroundRoutes);

// This is only for rendering check purposes, will be deleted:
server.get('/home', (req, res) => res.send('This is the home page.'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on ${PORT}.`));

module.exports = server;
