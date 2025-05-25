const mongoose = require('mongoose');

const userschema = mongoose.Schema(
    {
        phonenumber:{
            type:String,
            required:true,
            unique:true
        },
        isverified:{
            type:Boolean,
            default:false,
        },
    },
    {
        timestamps:true
    }
);

const User = mongoose.model('User',userschema);

module.exports = User;