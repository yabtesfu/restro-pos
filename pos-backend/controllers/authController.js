const User = require('../models/userModel');
const AppError = require('../utils/AppError');
const asyncHandler = require('../middlewares/asyncHandler');
const generateToken = require('../services/tokenService');

const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password) {
    return next(new AppError('Name, email, and password are required', 400));
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new AppError('User with this email already exists', 409));
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
  });

  const token = generateToken(user._id);

  res.status(201).json({
    status: 'success',
    message: 'User registered successfully',
    token,
    data: {
      user,
    },
  });
});

module.exports = {
  register,
};
