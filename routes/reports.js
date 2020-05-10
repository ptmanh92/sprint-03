const express = require('express');
const router = express.Router();

const reportsControllers = require('../controllers/reports');

router.get('/application/:a_id', reportsControllers.getApplicationByAppID);
router.get('/user/:u_id', reportsControllers.getApplicationByUserID);
router.post('/', reportsControllers.createApplication);
router.patch('/:a_id', reportsControllers.updateApplication);
router.delete('/:a_id', reportsControllers.deleteApplication);

module.exports = router;