const mongoose = require('mongoose');
const db = require('./config/db');

mongoose.connect(db.url2, {
    useNewUrlParser: true,
    useCreateIndex: true,
});