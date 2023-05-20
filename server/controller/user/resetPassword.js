const bcrypt = require("bcrypt");
const User = require("../../model/user");
const sendMail = require("../../services/sendMail");
const OTP = require("../../model/otpVerification");

const resetPasswordSchema = require("../../model/PassresetSchema");

const resetPassword = async (req, res) => {
  try {
    const { error, value } = resetPasswordSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error });
    }

    const { email, newPassword } = value;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const hash = bcrypt.hashSync(newPassword, 10);

    user.password = hash;
    await user.save();

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    const newOTPVerification = new OTP({
      user_id: user._id,
      otp: otp,
    });
    await newOTPVerification.save();

    sendMail(email, otp);
    
    res.status(200).json({
      message: "Password reset successful! Please check your email inbox and fill in the OTP to verify the password change.",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = resetPassword;
