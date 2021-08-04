const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/pasta/:id', (req, res) => {
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
    app.get('/pasta', (req, res) => {
        console.log('============================================================');
        console.log('get /pasta');
        db.collection('pasta').find({}, (err, item) => {
            if (err) {
                console.log(item);
                res.send({'error': err});
            } else {

                console.log('--------------------item');
                console.log(item);
                res.send(item); //todo
            }
        });
    });
    app.post('/pasta', (req, res) => {
        console.log('============================================================');
        console.log('post /pasta');
        console.log(req.body);
        const pasta = { text: req.body.body, title: req.body.title, tags: req.body.tags };
        db.collection('pasta').insertOne(pasta, (err, result) => {
            if (err) {
                console.log(result);
                res.send({'error': err});
            } else {
                console.log('++++++++++++++++++++result++++++++++++++++++++');
                console.log(result);
                res.send(result);
            }
        });
    });
    app.delete('/pasta/:id', (req, res) => {
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
    app.put ('/pasta/:id', (req, res) => {
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
