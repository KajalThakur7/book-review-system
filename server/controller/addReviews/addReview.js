const review = require("../../model/bookReview");

const addReview =
  ("/addReview",
  async (req, res) => {
    const Review = new review({
      user_id: req.body.user_id,
      book_id: req.body.book_id,
      review: req.body.review,
      is_deleted: req.body.is_deleted,
    });
    
    Review.save()
      .then(() => {
        res.status(201).json({
          message: "Review Post successfully!",
        });
      })
      .catch((err) => {
        res.send("error" + err);
      });
  });
module.exports = addReview;
