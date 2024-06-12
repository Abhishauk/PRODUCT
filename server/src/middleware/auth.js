import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied, no token provided' });
  }

  try {
    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET);
    
    // If token verification is successful, call next middleware or route handler
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default verifyToken;
