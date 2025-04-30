const db = require("../db");

async function getAuthorById(req, res) {
  const { authorId } = req.params; //route parameter extracted

  try {
    const author = await db.getAuthorById(Number(authorId)); //db is accessed

    if (!author) {
      res.status(404).send("Author not found!");
      return;
    }

    res.send(`Author name: ${author.name}`); // result is returned
  } catch (error) {
    console.error(`Error retrieving author:`, error);
    res.status(500).send("Internal server error");
  }
}

module.exports = { getAuthorById };
