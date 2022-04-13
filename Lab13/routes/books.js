const express = require('express');
const booksController = require('../controllers/booksController');
const router = express.Router();

router.get('/:bookId', booksController.getBookById);
router.post('/', booksController.saveBook);
router.get('/', booksController.getBooks);
router.delete('/:bookId', booksController.deleteBookById);
router.put('/:bookId', booksController.updateBook);

module.exports = router;