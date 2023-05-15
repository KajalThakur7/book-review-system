const book = require('../../model/books')

const deleteBook = async (req, res) => {
    const id = req.params.id;
  
    const deleteUser = await book.findByIdAndDelete(id);
  
    if (!deleteUser) {
      res
        .status(404)
        .send({ message: `can not delete with id ${id}, maybe id is wrong` });
    } else {
      res.send({
        message: "Book deleted successfully",
      });
    }
  };
  module.exports = deleteBook;