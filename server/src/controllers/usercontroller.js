
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      location,
      vehicleName,
      vehicleModel,
      vehicleYear,
      vehiclePrice
    } = req.body;

    console.log("FormData:", req.body); 

    // Validate required fields
    if (!name || !email || !phone || !password) {
      throw new Error("Missing required fields");
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

   
    const newUser = new User({
      user_email: email,
      user_location: location,
      user_info: { name, phone },
      password: passwordHash,
      vehicle_info: {
        vehicleName,
        vehicleModel,
        vehicleYear: parseInt(vehicleYear), 
        vehiclePrice: parseFloat(vehiclePrice) 
      }
    });

    const savedUser = await newUser.save();

    res
      .status(201)
      .json({ msg: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error("Error in Register function:", error);
    res.status(500).json({ error: error.message });
  }
};
