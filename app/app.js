const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const activityRoutes = require('./src/routes/activity.route');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Activities app application." });
});

app.get('/api', (req, res) => {
    res.json({ "message": "from api" });
});


app.get('/api/activity', (req, res) => {
    res.json({ "message": "from activity api" });
});

try {
    mongoose.connect(config.mongodb.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
        console.log('Conected to MongoDB');
    })
} catch (error) {
    console.log(error);
}
// connect to mongodb
// mongoose.connect(config.mongodb.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
//     console.log('Conected to MongoDB');
// })

// setup routes
app.use('/api', activityRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('The server is live on ' + port);
});