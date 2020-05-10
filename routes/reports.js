const express = require('express');
const router = express.Router();

const reportsControllers = require('../controllers/reports');

router.get('/', reportsControllers.getAllReports);
router.get('/:r_id', reportsControllers.getReportByID);
router.get('/user/:u_id', reportsControllers.getReportsByUserID);
router.post('/', reportsControllers.createReport);
router.patch('/:r_id', reportsControllers.updateReport);
router.delete('/:r_id', reportsControllers.deleteReport);

module.exports = router;