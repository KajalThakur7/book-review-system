const User = require("../../model/user");
const OTP = require("../../model/otpVerification");

module.exports.verifyEmail = async (req, res) => {
  const { email, otp } = req.body;
  const user = await validateUserSignUp(email, otp);
  res.send(user);
};

const validateUserSignUp = async (email, otp) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return [false, "User not found"];
  }

  const getOTP = await OTP.findOne({
    user_id: user._id,
  });
console.log(getOTP.otp, "user.otp", otp);
  if (getOTP.otp != otp) {
    return [false, "Invalid OTP"];
  }
  const updatedUser = await User.findOneAndUpdate(
    { _id: user._id },
    { is_active: true }
  );
  
  return [true, updatedUser];
};
