const Activity = require('../models/activity.model');

module.exports = {
    createActivity,
    getAllActivities,
    createOrUpdateActivity
};

async function createActivity(activityParam) {
    const activity = new Activity(activityParam);
    await activity.save();
}

async function getAllActivities() {
    return await Activity.find();
}

async function createOrUpdateActivity(activityParam) {
    const activity = await Activity.findOne({ fullDate: activityParam.fullDate });
    if (!activity) {
        const activity = new Activity(activityParam);
        await activity.save();
    } else {
        activity.time.push(activityParam.time);
        await activity.save();
    }

}
