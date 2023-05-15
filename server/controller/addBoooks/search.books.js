const Books = require("../../model/books");

const searchBooks = async (req, res) => {

try{
    var search = req.body.search;
    var  allTasks = await Books.find({ 
        $or: [
                  { "title": { $regex: ".*" + search + ".*", $options: "i" } },
                  {"author_name":{$regex: ".*" + search + ".*", $options:"i"}},
                  {"rating":{$regex: ".*" +search +".*", $options:"i"}},
                
                ],
     });
    //  res.send(allTasks);
if(allTasks.length>0){
    res.status(200).send({success: true, msg: "Book details", data:allTasks})
}else{
    res.status(200).send({success: true, msg: "book not found"})
}
}catch(error){
res.status(400).send({success: false, msg:error.message})
}
};

module.exports = searchBooks;
