
const path = 'http://cdc-react.herokuapp.com/api/';
const authorsPath = path + 'autores';
const booksPath = path + 'livros';

export default class Api {


    static getAuthors() {
        return fetch(authorsPath).then((authors) => authors.json())
    }

    static setAuthor(author) {
        let body = JSON.stringify(author);
        return fetch(authorsPath, {
            body: body, // must match 'Content-Type' header
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }).then((authors) => authors.json())
    }
 
    static getBooks() {
        return fetch(booksPath).then((books) => books.json())
    }

    static setBook(author) {
        let body = JSON.stringify(author);
        return fetch(booksPath, {
            body: body, // must match 'Content-Type' header
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }).then((books) => books.json())
    }
}