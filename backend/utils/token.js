// utils/token.js
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email }, // Payload
    process.env.ACCESS_TOKEN_SECRET, // Secret key
    { expiresIn: '1h' } // Token validity period
  );
};
