const express = require('express'),
    bodyParser = require('body-parser');
    cors = require('cors'),
    massive = require('massive'),
    config = require('../config');

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(config.connectionString).then(db => {
    app.set('db', db);
})




const port = 3030;
app.listen(port, () => console.log('Reporting for duty on port ', port));