const express = require('express');
const admin_controller = require('../controller/admin_controller');
const router = express.Router();

router.post('/create-police',admin_controller.createPoliceAccount);

module.exports = router;