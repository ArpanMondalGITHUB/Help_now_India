const police_auth_controller = require('../controller/police_auth_controller');
const router = require('express').Router();

router.post('/login',police_auth_controller.Login);

module.exports = router;