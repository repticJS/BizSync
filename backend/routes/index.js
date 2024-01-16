const router = require('express').Router();

const AccountManagementRoute = require('./AccountManagement');
router.use('/AccountManagement', AccountManagementRoute)

module.exports = router;