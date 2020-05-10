const mongoose = require('mongoose');
const mongodb = require('./mongodb');

// Get models
const Report = require('../models/report');

// Connect to database
mongoose.connect(mongodb.url).then(() => {
    console.log('Connected to database.')
}).catch(() => {
    console.log('Failed to connect to database.')
});