const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const router = express.Router();



const set_participant = require('./routes/set_participant');
app.use(express.json())
app.use('/set', set_participant);

module.exports = app;