const Ratings = require("../../model/bookRatings");

async function getAverageRating(req, res) {
  Ratings.aggregate([
    {
      $group: {
        _id: "$book_id",
        totalRatings: { $sum: "$rating" },
        count: { $sum: 1 },
      },
    },
    // Calculate the average rating for each group
    {
      $project: {
        book_id: "$_id",
        _id: 0,
        averageRating: { $divide: ["$totalRatings", "$count"] },
      },
    },
  ])
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
    });
}
module.exports = getAverageRating;
