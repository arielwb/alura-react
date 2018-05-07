const url = "https://instalura-api.herokuapp.com/api"

export default class Api {

    static getFotosByUser(user) {
        return fetch(url + '/public/fotos/' + user);
    }

    static getTimeline() {
        return fetch(url + '/fotos', {
            headers: Api.getHeaders()
        });
    }

    static like(id) {

        return fetch(`${url}/fotos/${id}/like`, {
            method: 'POST',
            headers: Api.getHeaders()
        });
    }

    static comment(fotoId, texto) {
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ texto }),
            headers: Api.getHeaders()
        };

        return fetch(`${url}/fotos/${fotoId}/comment`, requestInfo)
    }
  
    static search(texto) {
        return fetch(`${url}/public/fotos/${texto}`)
    }

    static login(nome, senha) {
        let payload = {
            login: nome,
            senha: senha
        }
        return fetch(url + '/public/login', {
            body: JSON.stringify(payload),
            method: 'POST',
            headers: Api.getHeaders()
        })
        
    }

    static getHeaders() {
        let headers = {
            'Content-type': 'Application/json'
        }

        if (Api.hasToken()) {
            headers['X-AUTH-TOKEN'] = Api.getToken();
        }
        return new Headers(headers);
    }

    static logout() {
        localStorage.removeItem('token');
    }

    static setToken(token) {
        localStorage.setItem('token', token);
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static hasToken() {
        return !!Api.getToken();
    }

    static handleResponse(response, errorMsg) {
        if(!response) throw new Error('Need a reponse');
        if (!response.ok) throw new Error(errorMsg || 'Error');
        return response.json();
    }

}