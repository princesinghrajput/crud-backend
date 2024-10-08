const mongoose = require('mongoose');

const userAuthSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

const UserAuth = mongoose.model('UserAuth', userAuthSchema);
module.exports = UserAuth;