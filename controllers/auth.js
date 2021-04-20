const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user: user,
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // find user
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Wrong credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Wrong credentials", 401));
    }

    res.status(200).json({
      success: true,
      token: "sdas21fsasada2",
    });
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = (req, res, next) => {
  res.send("forgotPassword route");
};

exports.resetPassword = (req, res, next) => {
  res.send("resetPassword route");
};
