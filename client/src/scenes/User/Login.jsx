
import React, { useState } from "react";
import { Login } from '../../Api/userApi';
import { useNavigate } from "react-router-dom";


const UserLogin = () => {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await Login({ email, password });
      console.log(response.data); 
        setPassword("");
        console.log("Login successful");
        navigate("/Home");
     
    } catch (error) {
     
      console.error("Login error:", error);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-90 max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center"> Login</h2>
        <div className="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className=" p-3 border  rounded-lg focus:outline-none  "
          />
        </div>
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

export default UserLogin;

