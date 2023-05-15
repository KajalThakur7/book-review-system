const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log("token: ", token);

  const decoded = jwt.verify(token, "this is dummy text");
  console.log(decoded);

  if (decoded.role != "admin") {
    res.status(500).json({
      status: 500,
      message: "You are not an admin",
    });
    return;
  }

  next();
};
