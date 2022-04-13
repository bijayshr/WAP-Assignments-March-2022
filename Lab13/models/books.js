let books = [];
let mainId = 0;

module.exports = class Books {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static findBookById(bookId){

        let index = books.findIndex(book=>book.id == bookId);
        console.log('index : ', index);
        if(index > -1){
            return books[index];
        }else{
            console.log('--------------- User not Found ----------------');
        }
    }

    save(){
        this.id = mainId+1;
        books.push(this);
        ++mainId;
        return this;
    }

    static getBooks(){
        return books;
    }

    static deleteBookById(bookId){
        let index = books.findIndex(book=> book.id == bookId);
        if(index>-1){
            books.splice(index, 1);
        }else{
            console.log('++++++++ Book doesn\'t exist ++++++++++++');
        }
        return books;
    }

    update(bookId){
        let index = books.findIndex(book=>book.id== bookId);
        if(index>-1){
            books.splice(index, 1, this);
        }else{
            console.log('No record found to update the book');
        }
        return this;
    }
}