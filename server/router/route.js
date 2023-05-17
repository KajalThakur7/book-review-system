const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const user = require("../model/user");
const requireAdmin = require("../middlewares/requireAdmin");
const requireUser = require('../middlewares/requireUser')

const signup = require("../controller/user/signUp");
const login = require("../controller/user/signIn");
const addBooks = require("../controller/addBoooks/addBooks");
const addReview = require("../controller/addReviews/addReview");
const pagination = require("../controller/addBoooks/books.pagination");
const searchBooks = require("../controller/addBoooks/search.books");
const updateBook = require("../controller/addBoooks/updateDetails");
const reviewBy = require("../controller/addReviews/reviewBy");
const getReview = require("../controller/addReviews/getReview");

const updateReview = require("../controller/addReviews/updateReview");
const deleteReview = require("../controller/addReviews/deleteReview");
const deleteBook = require("../controller/addBoooks/deleteBook");
const {verifyEmail}  = require("../controller/user/verifiedUser");
const addRating = require("../controller/addBookRatings.js/addRatings");
const deleteRating = require("../controller/addBookRatings.js/deleteRating");
const updateRating = require("../controller/addBookRatings.js/updateRating");
const getAverageRating = require("../controller/addBookRatings.js/averageRating");

router.post("/signup", signup);
router.post("/login", login);
router.post("/addBooks", requireAdmin, addBooks);
router.post("/addReview", requireUser, addReview);
router.get("/pagination", pagination);
router.get("/search-book", searchBooks);
router.put("/update-book/:id",requireAdmin, updateBook);
router.post("/reviewBy", reviewBy);
router.get("/get-review", getReview);
router.put("/edit-review/:id",requireUser, updateReview);
router.delete("/delete-review/:id",requireUser, deleteReview);
router.delete("/delete-book/:id", requireAdmin, deleteBook);
router.post('/verify', verifyEmail)
router.post('/add-rating',requireUser, addRating)
router.delete("/delete-rating/:id",requireUser, deleteRating);
router.put("/edit-rating/:id", requireUser,updateRating)
router.post('/get-average', getAverageRating)

// router.post('/get-average', getAverageRating)
module.exports = router;
