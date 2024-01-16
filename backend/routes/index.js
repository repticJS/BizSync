const router = require('express').Router();

const LoginRoute = require('./Login');
router.use('/login', LoginRoute)

module.exports = router;