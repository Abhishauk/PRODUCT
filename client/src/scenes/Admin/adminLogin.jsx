import React, { useState } from "react";
import { Adminlogin } from "../../Api/adminApi";

const AdminLogin = () => {
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
   
    try {
      console.log(password);
     const data = await Adminlogin(password)
     setPassword("")
     console.log(data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-90 max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <div className="mb-6">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className=" p-3 border  rounded-lg focus:outline-none  "
          />
        </div>
        <button
          type="submit"
          className="w-60 bg-pink-400 text-white py-3 rounded-lg font-semibold hover:bg-pink-300 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
