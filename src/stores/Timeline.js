import api from '../services/api';
import PubSub from 'pubsub-js'

export default class Timeline {
    constructor() {
        this.fotos = []
    }

    get(promise) {
        promise
            .then(response => response.json())
            .then(fotos => {
                this.fotos = fotos;
                PubSub.publish('timeline', this.fotos)
            })
            .catch(err => console.log(err))
    }

    like(fotoId) {
        api.like(fotoId)
            .then(response => api.handleResponse(response, 'Erro no like'))
            .then(liker => {
                const fotoAchada = this.fotos.find(foto => foto.id === fotoId);
                fotoAchada.likeada = !fotoAchada.likeada;

                const possivelLiker = fotoAchada.likers.find(current => current.login === liker.login);

                if (possivelLiker === undefined) {
                    fotoAchada.likers.push(liker);
                } else {
                    const novosLikers = fotoAchada.likers.filter(current => current.login !== liker.login);
                    fotoAchada.likers = novosLikers;
                }
                PubSub.publish('timeline', this.fotos)
            })
            .catch(err => console.log(err))
    }

    comenta(fotoId, comentario) {
        api.comment(fotoId, comentario)
            .then(response => api.handleResponse(response, 'Erro no comentario'))
            .then(novoComentario => {
                const fotoAchada = this.fotos.find(foto => foto.id === fotoId);
                fotoAchada.comentarios.push(novoComentario);
                PubSub.publish('timeline', this.fotos)
            })
            .catch(err => console.log(err));
    }

    subscribe(cb) {
        PubSub.subscribe('timeline', (topic, fotos) => {
            this.fotos = fotos;
            cb(this.fotos);
        })
    }
}