import { strict } from "assert";
import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  }
},{timeStamp:true});



const User =mongoose.model('User',userSchema);

export default User;