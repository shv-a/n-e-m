const noteRoutes = require('./notes');
const pastaRoutes = require('./pasta');
module.exports = function(app, db) {
    noteRoutes(app, db);
    pastaRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов
};