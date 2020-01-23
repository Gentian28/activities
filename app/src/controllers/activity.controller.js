const activityService = require('../services/activity.service');

module.exports = {
    createActivity,
    getAllActivities
};

function createActivity(req, res, next) {
    activityService.createOrUpdateActivity(req.body)
        .then(() => res.json({}))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Caption."
            });
        });
}

function getAllActivities(req, res, next) {
    res.send({ message: 'sent' })
    //     console.log('hitted')
    //     activityService.getAllActivities()
    //         .then(activities => {
    //             console.log('resolved')
    //             res.json(activities)
    //         })
    //         .catch(err => {
    //             console.log('error getting activities')
    //             res.send(err)
    //         });
}