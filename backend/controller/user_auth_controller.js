const User = require('../models/user');
const twilioClient = require('../config/twilio_config')

exports.sendOtp = async(req,res)=>{
    try {
        const {phonenumber} = req.body;

        if (!phonenumber) {
            return res.status(400).json({message:'Phone Number is required'});
        }

        let newphonenumber = '+91' + phonenumber;

        await twilioClient.verify.v2
        .services(process.env.TWILIO_VERIFY_SERVICE_SID)
        .verifications
        .create({
            to: newphonenumber,
            channel: 'sms'
        });

        let user = await User.findOne({phonenumber:newphonenumber});
        if (!user) {
            user = await User.create(
                {
                    phonenumber:newphonenumber,
                    isverified:false
                }
            );
        }

        res.status(200).json({ 
          message: 'OTP sent successfully',
          phoneNumber: newphonenumber 
        });

    } catch (error) {
        console.error('Send OTP Error from backend:', error);
        res.status(500).json({ message: 'Failed to send OTP from backend', error: error.message });
    }
};

exports.verifyOtp = async(req,res) =>{
    
    try {
        const {phonenumber,otp} = req.body;

        if (!phonenumber || !otp) {
        return res.status(400).json({ message: 'Phone number and OTP are required' });
        }

        let newphonenumber = '+91' + phonenumber;

        const verification = await twilioClient.verify.v2
        .services(process.env.TWILIO_VERIFY_SERVICE_SID)
        .verificationChecks
        .create({
            to: newphonenumber,
            code: otp 
        });

        if (verification.status === 'approved') {

            await User.findOneAndUpdate(
                { phonenumber: newphonenumber },  
                { isverified: true }              
            );


            res.status(200).json({
                message: 'OTP verified successfully',
                user: {
                    phoneNumber: newphonenumber,  
                    isVerified: true
                }
            });
        } else {
            res.status(400).json({ message: 'Invalid or expired OTP from backend' });
        }

    } catch (error) {
        console.error('verification Error from backend:', error);
        res.status(500).json({ message: 'Verification failed from backend', error: error.message });
    }
};