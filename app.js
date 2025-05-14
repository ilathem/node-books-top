const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
// import path commonjs module
const path = require('node:path');

// tell app to use ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// tell app where to find static assets
const assetsPath = path.join(__dirname, 'public');
// middleware function that says static assets will be in public/
app.use(express.static(assetsPath));

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
  // catch all error middleware function
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My first express app - listening on port ${PORT}`);
});
