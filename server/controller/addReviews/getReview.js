const review = require("../../model/bookReview");

const getReview = async (req, res) => {
  try {
    const user = await review.find();
    console.log(user);
    res.json(user);
  } catch (err) {
    res.send("error" + err);
  }
};

module.exports = getReview;
