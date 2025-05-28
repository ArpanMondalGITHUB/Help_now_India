const mongoose = require('mongoose');

const policeUserSchema = mongoose.Schema(
    {
        email:{type:String , reuired:true , unique:true},
        name:String,
        password:String,
        isverfied:{type:Boolean , default:false},
    }
);

const PoliceUser = mongoose.model('PoliceUser',policeUserSchema);

module.exports = PoliceUser;