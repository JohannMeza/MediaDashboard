const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/index.js');
const morgan = require('morgan');
const cors = require('cors');

// --- SETTIGNS
app.set('port', 3000);

// --- USE STATIC FILES
app.use(express.static(path.join(__dirname, '..', '/dist')));

// --- mIDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

// --- RUTAS
app.use('/api', router);

module.exports = app
