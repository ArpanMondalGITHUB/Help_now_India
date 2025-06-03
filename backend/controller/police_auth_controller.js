const PoliceUser = require('../models/police');
const bcrypt = require('bcryptjs');

exports.Login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await PoliceUser.findOne({email});
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const match = await bcrypt.compare(password,user.password);
        if (!match) return res.status(401).json({ message: 'Invalid credentials' });

        if (match) {
            const user = await PoliceUser.findOneAndUpdate(
                { email:email },  
                { isverified: true },
                { new: true }
            );
            res.status(200).json({
            message: 'OTP verified successfully',
            user
            });
        }

    } catch (error) {
        res.status(500).json({ message: 'Failed to Login', error: error.message });
    }
};