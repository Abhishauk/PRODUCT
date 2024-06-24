import axios from "axios";

export const Adminlogin = async (password) => {
  try {
    console.log('password:', password);

    const response = await axios.post(
      'http://localhost:6001/admin/adminLogin',
      { password }
    );

    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error; 
  }
};
