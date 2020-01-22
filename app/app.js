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

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Activities app application." });
});

// connect to mongodb
mongoose.connect(config.mongodb.dbURI, () => {
    console.log('Conected to MongoDB');
})

// setup routes
app.use('/api', activityRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('The server is live on ' + port);
});