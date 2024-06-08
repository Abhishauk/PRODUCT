import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    user_email: {
        type : String,
        required : true,
        unique : true
    },
    user_id: {
        type : String,
        required : true
    },
    user_location : String,
    user_info: {
        type : Object,
        default : {}
    },
    password: {
        type : String,
        required : true
    },
    vehicle_info : [String]

})

const User = mongoose.model('User' , UserSchema);
export default User;