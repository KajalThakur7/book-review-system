const OTP = require("../../model/otpVerification");

const verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;

    const otpVerification = await OTP.findOne({ otp });

    if (!otpVerification) {
      return res.status(404).json({ error: "Invalid OTP" });
    }


    otpVerification.isVerified = true;
    await otpVerification.save();


    res.status(200).json({ message: "OTP verification successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = verifyOTP;
