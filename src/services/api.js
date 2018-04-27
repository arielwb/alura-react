const url = "https://instalura-api.herokuapp.com/api/public"

export default class Api {
    
    static getFotos(user){
        return fetch(url + '/fotos/' + user);
    }

    static login(nome, senha){
        console.log(nome)
        console.log(senha)
        let payload = {
            login: nome,
            senha: senha
        }
        console.log(payload)
        return fetch(url + '/login', {
            body: JSON.stringify(payload),
            method: 'POST',
            headers: new Headers({
                'Content-type': 'Application/json'
            })

        });
    }


}