const rating = require("../../model/bookRatings");

const addRating = async (req, res) => {
  const Rating = new rating({
    user_id: req.body.user_id,
    book_id: req.body.book_id,
    rating: req.body.rating,
  });

  Rating.save()
    .then(() => {
      res.status(201).json({
        message: " successfull!",
      });
    })
    .catch((err) => {
      res.send("error" + err);
    });
};
module.exports = addRating;
