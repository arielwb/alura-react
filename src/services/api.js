
const path = 'http://cdc-react.herokuapp.com/api/autores';
export default class Api {


    static getAuthors() {
        return fetch(path).then((authors) => authors.json())
    }

    static setAuthors(author) {
        let body = JSON.stringify(author);
        return fetch(path, {
            body: body, // must match 'Content-Type' header
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }).then((authors) => authors.json())
    }
}