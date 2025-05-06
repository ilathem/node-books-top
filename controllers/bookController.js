const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../error/CustomNotFoundError");

const getBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params; //route parameter extracted

  const book = await db.getBookById(Number(bookId)); //db is accessed

  if (!book) {
    throw new CustomNotFoundError("Book not found!");
  }

  res.send(`Book name: ${book.name}`); // result is returned
});

module.exports = { getBookById };
