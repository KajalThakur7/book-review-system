const bcrypt = require("bcrypt");
const User = require("../../model/user");
const sendMail = require("../../services/sendMail");
const OTP = require("../../model/otpVerification");

const signupSchema = require("../../model/signupSchema");

const signup = async (req, res) => {
  try {
    const { error, value } = signupSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error });
    }

    const {
      username,
      email,
      dateOfBirth,
      role,
      is_active,
      is_deleted,
      password,
    } = value;

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
      message:
        "Please check your email inbox and fill in the OTP to verify the user!",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = signup;
