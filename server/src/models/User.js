import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true,
    unique: true
  },

  user_location: String,

  user_info: {
    name: { type: String, required: true },
    phone: { type: String, required: true }
  },

  password: {
    type: String,
    required: true
  },

  vehicle_info: {
    vehicleName: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    vehicleYear: { type: Number, required: true },
    vehiclePrice: { type: Number, required: true }
  }
});

const User = mongoose.model("User", UserSchema);

export default User;
