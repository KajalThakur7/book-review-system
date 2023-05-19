const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Check if the Authorization header exists
  if (!req.headers.authorization) {
    res.status(401).json({
      status: 401,
      message: "Missing authorization header",
    });
    return;
  }

  // Extract the token from the Authorization header
  const token = req.headers.authorization.split(" ")[1];
  console.log("token: ", token);

  try {
    // Verify the token
    const decoded = jwt.verify(token, "this is dummy text");
    console.log(decoded);

    // Check if the decoded token has the role of an admin
    if (decoded.role !== "admin") {
      res.status(403).json({
        status: 403,
        message: "You are not an admin",
      });
      return;
    }

    // Token is valid and user is an admin, continue to the next middleware
    next();
  } catch (error) {
    // Handle JWT verification errors
    res.status(401).json({
      status: 401,
      message: "Invalid or expired token",
    });
  }
};