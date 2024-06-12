import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const user = await User.findOne({ user_email: email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.status(200).json({ msg: "User login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};


