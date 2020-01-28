const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const activityRoutes = require('./src/routes/activity.route');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Activities app application." });
});

try {
    mongoose.connect(config.mongodb.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
        console.log('Conected to MongoDB');
    })
} catch (error) {
    console.log(error);
}

// setup routes
app.use('/api', activityRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('The server is live on ' + port);
});