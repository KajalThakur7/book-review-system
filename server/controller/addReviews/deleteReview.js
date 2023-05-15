const review = require('../../model/bookReview')

const deleteReview = async (req, res) => {
    const id = req.params.id;
  
    const deleteUser = await review.findByIdAndDelete(id);
  
    if (!deleteUser) {
      res
        .status(404)
        .send({ message: `can not delete with id ${id}, maybe id is wrong` });
    } else {
      res.send({
        message: "Review deleted successfully",
      });
    }
  };
  module.exports = deleteReview;