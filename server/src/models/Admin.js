import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    admin_id : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }

});

const Admin = mongoose.model('Admin' , AdminSchema);

export default Admin;