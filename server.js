const express        = require('express');
const cors           = require('cors');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port           = 8000;
const routes         = require('./app/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

MongoClient.connect(db.url,{useUnifiedTopology: true},  (err, database) => {
    if (err) {
        console.log('===error===', err);
        return err
    }

    const db = database.db('qp');
    routes(app, db);

    // app.get('/apitest', (req, res) => {
    //     res.send('Hello World with Express')
    // });

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});
