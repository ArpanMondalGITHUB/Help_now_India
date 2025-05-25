const express = require('express');
const user_auth_controller = require('../controller/user_auth_controller');
const router = express.Router();

router.post('/send-otp',user_auth_controller.sendOtp);
router.post('/verify-otp',user_auth_controller.verifyOtp);


module.exports = router;