// lib/auth.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Function to hash the password
export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10); // Generate salt
  return bcrypt.hashSync(password, salt); // Hash password
};

// Function to verify password
export const verifyPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword); // Compare passwords
};

// Function to generate JWT token
export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Function to verify JWT token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null; // If verification fails
  }
};
