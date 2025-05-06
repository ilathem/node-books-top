const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

// todo: add books

const books = [
  { id: 1, name: "The Silmarillion" },
  { id: 2, name: "Plato's Republic" },
  { id: 3, name: "Thus Spoke Zarathustra" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

async function getBookById(bookId) {
  return books.find((book) => book.id === bookId);
}

module.exports = { getAuthorById, getBookById };
