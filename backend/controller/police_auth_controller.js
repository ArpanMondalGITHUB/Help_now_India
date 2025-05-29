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


        res.status(200).json({ 
            name:user.name,
            email:user.email 
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to Login', error: error.message });
    }
};