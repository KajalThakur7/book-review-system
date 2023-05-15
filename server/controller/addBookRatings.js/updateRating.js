const rating = require("../../model/bookRatings");

const updateRating = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const update = await rating.findOneAndUpdate({ _id: id }, data);

  if (!update) {
    res.status(404).send({
      message: `can not update rating with ${id}`,
    });
  } else {
    res.status(200).json({
      status: 200,
      message: " Updated successfully",
    });
  }
};
module.exports = updateRating ;