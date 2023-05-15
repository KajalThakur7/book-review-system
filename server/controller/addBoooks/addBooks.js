const Books = require("../../model/books");
const addBooks = ( '/addBooks',async (req, res)=>{
    const books = new Books({
        title: req.body.title,
        description: req.body.description,
        author_name: req.body.author_name,
        is_deleted:req.body.is_deleted,
       
      });
      books
      .save()
      .then(() => {
        res.status(201).json({
          message: "book saved successfully!",
        });
      })
      .catch(err => {
        res.send("error" + err);
      });
   });
module.exports = addBooks;
