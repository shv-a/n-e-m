let ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('pasta').findOne(details, (err, item) => {
            if (err) {
                console.log(item);
                res.send({'error': err});
            } else {
                console.log(item);
                res.send(item);
            }
        });
    });
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        db.collection('pasta').insertOne(note, (err, result) => {
            if (err) {
                console.log(result);
                res.send({'error': err});
            } else {
                console.log(result);
                res.send(result.ops[0]);
            }
        });
    });
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('pasta').remove(details, (err, item) => {
            if (err) {
                console.log(item);
                res.send({'error': err});
            } else {
                console.log(item);
                res.send('Note ' + id + ' deleted!');
            }
        });
    });
    app.put ('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('pasta').update(details, note, (err, result) => {
            if (err) {
                console.log(result);
                res.send({'error': err});
            } else {
                console.log(result);
                res.send(note);
            }
        });
    });
};