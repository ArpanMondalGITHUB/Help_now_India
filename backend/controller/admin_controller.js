const PoliceUser = require('../models/police');
const bcrypt = require('bcryptjs');

exports.createPoliceAccount = async(req,res) => {

    try {
        const{name,email,password} = req.body;

        const existing = await PoliceUser.findOne({email});
        if (existing) return res.status(400).json({message:'user exist'});

        const hashedPassword = await bcrypt.hash(password,10);

        const newOfficer = new PoliceUser(
            {
                name,
                email,
                password:hashedPassword,
                isisverfied:true
            }
        );
        await newOfficer.save();

        res.status(202).json({message:'Account Created Successfully'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};