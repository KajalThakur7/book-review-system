const Books = require("../../model/books");


const pagination = async (req, res) => {
  
  const { page = 1, limit = 5, sort , asc } = req.query;

  try {
   
    const data = await Books.find()
      .limit(limit * 1).sort({[sort]: asc})
      .skip((page - 1) * limit)
      .exec();

    
    const count = await Books.count();

      res.json({
      data,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err.message);
  }
};



module.exports = pagination;
