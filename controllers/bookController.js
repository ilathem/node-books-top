const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../error/CustomNotFoundError");

// for getting all book names and id's
// async handler is like a try catch block I don't have to write
const getAllBooks = asyncHandler(async (req, res) => {
  // wait to get books from database
  const books = await db.getAllBooks();

  // handle error if no books in db
  if (!books) throw new CustomNotFoundError("No books in the database!");

  // send books back in response
  res.send(`Books: ${books}`);
});

const getBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params; //route parameter extracted

  const book = await db.getBookById(Number(bookId)); //db is accessed

  if (!book) {
    throw new CustomNotFoundError("Book not found!");
  }

  res.send(`Book name: ${book.name}`); // result is returned
});

module.exports = { getBookById };
