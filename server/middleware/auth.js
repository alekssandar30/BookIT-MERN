const jwt = require("jsonwebtoken");
const user = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route!", 401));
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id!", 404));
    }

    // add user to the request
    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized!", 401));
  }
};
