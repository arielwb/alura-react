import api from '../services/api';
import { listagem, like, comment, notify } from '../actions'

export default class Timeline {

    static getList(promise) {
        return dispatch => {
            return promise
                .then(response => response.json())
                .then(fotos => {
                    dispatch(listagem(fotos))
                    return fotos;
                })
                .catch(err => console.log(err))
        }
    }

    static like(fotoId) {
        return dispatch => {
            api.like(fotoId)
                .then(response => api.handleResponse(response, 'Erro no like'))
                .then(liker => {
                    dispatch(like(fotoId, liker))
                    return liker;
                })
                .catch(err => console.log(err))
        }
    }

    static comenta(fotoId, comentario) {
        return dispatch => {
            api.comment(fotoId, comentario)
                .then(response => api.handleResponse(response, 'Erro no comentario'))
                .then(novoComentario => {
                    dispatch(comment(fotoId, novoComentario))
                    return novoComentario;
                })
                .catch(err => console.log(err));
        }
    }

    static search(searchText) {
        return dispatch => {
            return api.search(searchText)
                .then(response => api.handleResponse(response, 'Erro na busca'))
                .then(result => {
                    if (result.length === 0) {
                        dispatch(notify('Usuário não encontrado'))
                    }
                    else {
                        dispatch(notify(''))
                        dispatch(listagem(result))
                    }
                })
                .catch(err => console.log(err))
        }
    }
}