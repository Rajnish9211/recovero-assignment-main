const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true},
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin","client"],
    default: "client",
  },
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
