const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();

// todo: pass all authors to controller
authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", getAuthorById); //route handed to controller

module.exports = authorRouter;
