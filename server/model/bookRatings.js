const mongoose = require("mongoose");
const Schema = mongoose.Schema;

bookRatingsSchema = mongoose.Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "user" },
    book_id: { type: Schema.Types.ObjectId, ref: "Books" },
   
    rating: {
      type: Number,
      // postBy: { type: Schema.Types.ObjectId, ref: "user" },
    },
    // totalratings:{
    //   type: String,
    //   default: 0
    // },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ratings", bookRatingsSchema);