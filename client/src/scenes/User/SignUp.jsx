
import React, { useState } from "react";
import { Register } from "../../Api/userApi";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    location: "",
    vehicleName: "",
    vehicleModel: "",
    vehicleYear: "",
    vehiclePrice: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async e => {
    e.preventDefault();
    console.log("Form data:", formData);
    try {
        if (!formData.email.trim()) {
            throw new Error("Email field is required");
          }
      const response = await Register(formData);
       // Clear the form data after successful signup
    setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        location: "",
        vehicleName: "",
        vehicleModel: "",
        vehicleYear: "",
        vehiclePrice: ""
      });
      console.log("Signup successful", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* User Information Section */}
        <h3 className="text-xl font-semibold mb-4">User Information</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Enter Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>

        {/* Vehicle Information Section */}
        <h3 className="text-xl font-semibold mb-4">Vehicle Information</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Vehicle Name"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Vehicle Model"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Vehicle Year"
            name="vehicleYear"
            value={formData.vehicleYear}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Vehicle Price"
            name="vehiclePrice"
            value={formData.vehiclePrice}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-400 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
