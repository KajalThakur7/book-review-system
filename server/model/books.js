const mongoose = require("mongoose");
const Schema = mongoose.Schema;

bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    author_name: { type: String, required: true },
    
    is_deleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Books", bookSchema);
