
const mongoose = require("mongoose");

DB = "mongodb+srv://book:book123@cluster0.2pqldy2.mongodb.net/test";

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(DB);
    console.log(`Database connected to:- ${DB}`);
  } catch (err) {
    console.error(`Database connection error: ${err}`);
  }
};

module.exports = connectDB;