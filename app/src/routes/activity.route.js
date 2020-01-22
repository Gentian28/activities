const router = require('express').Router();
const activity = require('../controllers/activity.controller');

// Create a new Caption
router.post('/activity', activity.createActivity);
router.get('/activities', activity.getAllActivities);

module.exports = router;