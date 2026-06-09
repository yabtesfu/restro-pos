const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');

const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new AppError('JWT_SECRET is not configured', 500);
  }

  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

module.exports = generateToken;
