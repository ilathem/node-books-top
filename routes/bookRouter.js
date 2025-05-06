// import router to catch network call
const { Router } = require("express");
// import controller to pass execution
const { getBookById } = require("../controllers/bookController");

// create router
const bookRouter = Router();

// catch-all route for /books
bookRouter.get("/", (req, res) => res.send("All books"));
// send /books/1 to the controller to handle data
bookRouter.get("/:bookId", getBookById);

// export to use in app
module.exports = bookRouter;
