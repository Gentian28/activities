const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongodb: {
        dbURI: process.env.MONGO_DB_URI
    }
}