import api from '../services/api';
import { loginActions } from '../actions'

export default class Login {

    static login(user, pass) {
        return dispatch => {
            return api.login(user, pass)
                .then(response => {
                    if (response.ok) return response.text()
                    else throw new Error('Não foi possível efetuar login')
                })
                .then(token => {
                    dispatch({ type: loginActions.login, token })
                    return token;
                })
                .catch(err => console.log(err))
        }
    }
}