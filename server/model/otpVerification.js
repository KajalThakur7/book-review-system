const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otpVerificationSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "user" },
  otp: { type: String },
  // createAt: Date,
  // expiresAt: Date,
});

const otpVerification = mongoose.model(
  "otpVerification",
  otpVerificationSchema
);

module.exports = otpVerification;
