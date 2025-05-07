const { Router } = require("express");
const {
  getAuthorById,
  getAllAuthors,
} = require("../controllers/authorController");

const authorRouter = Router();

// todo: pass all authors to controller
authorRouter.get("/", getAllAuthors);
authorRouter.get("/:authorId", getAuthorById); //route handed to controller

module.exports = authorRouter;
