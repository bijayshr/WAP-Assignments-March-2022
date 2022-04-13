const Books = require('../models/books');


exports.getBookById = (req, res, next)=>{
    let bookId = req.params.bookId;
    res.status(200).json(Books.findBookById(bookId));
};

exports.saveBook = (req, res, next) =>{
    let newBook = req.body;
    const book = new Books(null, newBook.title, newBook.ISBN, newBook.publishedDate, newBook.author);
    res.status(201).json(book.save());
};

exports.getBooks = (req, res, next)=>{
    res.status(200).json(Books.getBooks());
};

exports.deleteBookById = (req, res, next) =>{
    res.status(200).json(Books.deleteBookById(req.params.bookId))
};

exports.updateBook = (req, res) =>{
    let updatedBookObj = req.body;
    let bookId = req.params.bookId;
    const updatedBook = new Books(bookId,
        updatedBookObj.title,updatedBookObj.ISBN,
        updatedBookObj.publishedDate, updatedBookObj.author)
    res.status(200).json(updatedBook.update(bookId));
}

