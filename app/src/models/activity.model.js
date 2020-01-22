const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        day: {
            type: String,
            required: true
        },
        fullDate: {
            type: String,
            required: true,
            unique: true
        },
        time: {
            type: [],
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Activity = mongoose.model('activity', activitySchema);

module.exports = Activity;