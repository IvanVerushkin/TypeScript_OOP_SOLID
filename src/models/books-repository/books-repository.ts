const {Book} = require('./types');

abstract class BooksRepository {
    abstract createBook(book: Book): void;
    abstract getBook(id: string): Book;
    abstract getBooks(): Book[];
    abstract updateBook(id: string): Book;
    abstract deleteBook(id: string): void;
};