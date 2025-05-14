const { Router } = require('express');

const indexRouter = Router();

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
];

indexRouter.get('/', (req, res) => res.render('index', { links: links }));

module.exports = indexRouter;
