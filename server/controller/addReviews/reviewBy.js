const review = require("../../model/bookReview");

const reviewBy = async (req, res) => {
  const rightData = await review
    .find({ _id: req.body.right_id })
    .populate("user_id");
  // res.send(rightData);
   await review.aggregate(averageRatingPipeline(book._id));
};
module.exports = reviewBy;
