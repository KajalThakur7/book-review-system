const review = require("../../model/bookReview");

const updateReview = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const update = await review.findOneAndUpdate({ _id: id }, data);

  if (!update) {
    res.status(404).send({
      message: `can not update review with ${id}`,
    });
  } else {
    res.status(200).json({
      status: 200,
      message: "Book updated successfully",
    });
  }
};
module.exports = updateReview ;
