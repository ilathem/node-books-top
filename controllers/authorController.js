const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../error/CustomNotFoundError");

// todo: implement getAllAuthors

const getAllAuthors = asyncHandler(async (req, res) => {
  const authors = await db.getAllAuthors(); //db is accessed

  if (!authors) {
    throw new CustomNotFoundError("Authors not found!");
  }

  res.send(`Authors:\n${authors}`); // result is returned
});

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params; //route parameter extracted

  const author = await db.getAuthorById(Number(authorId)); //db is accessed

  if (!author) {
    throw new CustomNotFoundError("Author not found!");
  }

  res.send(`Author name: ${author.name}`); // result is returned
});

module.exports = { getAuthorById, getAllAuthors };
