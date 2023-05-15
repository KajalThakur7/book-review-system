const mongoose = require("mongoose");
const Schema = mongoose.Schema;

bookReviewSchema = mongoose.Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "user" },
    book_id: { type: Schema.Types.ObjectId, ref: "Books" },
    review: {
      type: String,
    },
   
    is_deleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("review", bookReviewSchema);
