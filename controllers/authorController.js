const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../error/CustomNotFoundError");

// todo: implement getAllAuthors

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params; //route parameter extracted

  const author = await db.getAuthorById(Number(authorId)); //db is accessed

  if (!author) {
    throw new CustomNotFoundError("Author not found!");
  }

  res.send(`Author name: ${author.name}`); // result is returned
});

module.exports = { getAuthorById };
