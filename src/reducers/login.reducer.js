import { loginActions } from '../actions';
import api from '../services/api';

export default function loginReducer(state = '', action) {
    if (action.type === loginActions.login) {
        return action.token;
    }

    if (action.type === loginActions.logout) {
        return state;
    }

    return api.hasToken() ? api.getToken() : false;
}
