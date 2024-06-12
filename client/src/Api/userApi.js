
import axios from "axios";

export const Register = async formData => {
  try {
    console.log("FormData:", formData);
    const response = await axios.post(
      "http://localhost:6001/userRegister",
      formData
    );
    return response;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const Login = async (values) => {
  try {
    console.log(",,,,,",values);
  
    const response = await axios.post(
      "http://localhost:6001/Login",
      values
    );
    return response;
    
  } catch (error) {
    
  }
};


