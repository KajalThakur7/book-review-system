const Books = require("../../model/books");

const updateBook = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const update = await Books.findOneAndUpdate({ _id: id }, data);

  if (!update) {
    res.status(404).send({
      message: `can not update book with ${id}, maybe book not found`,
    });
  } else {
    res.status(200).json({
      status: 200,
      message: "Book updated successfully",
    });
  }
};
module.exports = updateBook ;
