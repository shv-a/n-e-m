const noteRoutes = require('./notes');
const pastaRoutes = require('./pasta');
const userRoutes = require('./user');
const express = require('express');
const router = express.Router();

module.exports = function(app, db) {
    noteRoutes(app, db);
    pastaRoutes(app, db);
    userRoutes(router);
    // Тут, позже, будут и другие обработчики маршрутов
};