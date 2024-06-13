import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ msg: "Authorization denied, no token provided" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default verifyToken;
