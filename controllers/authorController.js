const db = require("../db");
const asyncHandler = require("express-async-handler");

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params; //route parameter extracted

  const author = await db.getAuthorById(Number(authorId)); //db is accessed

  if (!author) {
    res.status(404).send("Author not found!");
    return;
  }

  res.send(`Author name: ${author.name}`); // result is returned
});

module.exports = { getAuthorById };
