const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const getJwtToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 1000 * 60 * 60 * 24 * 30,
  });
};

const signupUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("Email is in use already");
  }

  const user = new User(req.body);
  await user.save();

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: getJwtToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("failed to create a new user");
  }
});

const authorizeUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: getJwtToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

module.exports = { signupUser };
