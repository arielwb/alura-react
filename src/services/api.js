
const path = 'http://cdc-react.herokuapp.com/api/autores';
export default class Api {


    static getAuthors() {
        return fetch(path)
            .then(function (response) {
                return response.json();
            })
    }

    static setAuthors(author){
        let body = JSON.stringify(author);
        console.log(body)
        return fetch(path, {
            body: body, // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
          })
          .then(response => response.json()) 
    }
}