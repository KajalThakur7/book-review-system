const rating = require('../../model/bookRatings')

const deleteRating = async (req, res) => {
    const id = req.params.id;
  
    const deleteRating = await rating.findByIdAndDelete(id);
  
    if (!deleteRating) {
      res
        .status(404)
        .send({ message: `can not delete rating with id ${id}, maybe id is wrong` });
    } else {
      res.send({
        message: "Rating deleted successfully",
      });
    }
  };
  module.exports = deleteRating;