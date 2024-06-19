import React, { useState } from "react";
import { Login } from "../../Api/userApi";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    setError("");
    setIsLoading(true); // Start loading

    if (!email || !password) {
      setError("Both email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await Login({ email, password });
      console.log("response:", response.data.user);
      if (
        response.status === 200 &&
        response.data.msg === "User login successful"
      ) {
        localStorage.setItem("token", response.data.token);
        setPassword("");
        navigate("/home");
      } else {
        setError(response.data.msg || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-90 max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error &&
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>}
        <div className="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none w-full"
            required
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
            className="p-3 border rounded-lg focus:outline-none w-full"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-pink-400 text-white py-3 rounded-lg font-semibold hover:bg-pink-300 transition-colors ${isLoading
            ? "opacity-50 cursor-not-allowed"
            : ""}`}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
