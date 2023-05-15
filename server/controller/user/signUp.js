const bcrypt = require("bcrypt");
const User = require("../../model/user");
const env = require("env");
const sendMail = require("../../services/sendMail");
const OTP = require("../../model/otpVerification");

const signup = async (req, res) => {
  const {
    username,
    email,
    dateOfBirth,
    role,
    is_active,
    is_deleted,
    password,
  } = req.body;

  const hash = bcrypt.hashSync(password, 10);

  const user = new User({
    username: username,
    password: hash,
    email: email,
    dateOfBirth: dateOfBirth,
    role: role,
    is_active: is_active,
    is_deleted: is_deleted,
  });
  await user.save();
  const otp = Math.floor(1000 + Math.random() + 8000).toString();


  const newOTPVerification = new OTP({
    user_id: user._id,
    otp: otp,
  });
  await newOTPVerification.save();
  sendMail(email, otp);
  res.status(201).json({
    message: "Please check you email inbox and fill the OTP to verify user!",
  });
};
 
module.exports = signup;
