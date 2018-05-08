
export function listagem(fotos) {
    return{ type: timelineActions.list, fotos }
}

export  function like(fotoId, liker) {
    return { type: timelineActions.like, fotoId, liker };
}

export function comment( fotoId, novoComentario ) {
    return { type: timelineActions.comment, fotoId, novoComentario }
}


export const timelineActions = {
    list: 'timeline:list',
    like: 'timeline:like',
    comment: 'timeline:comment',
    search: 'timeline:search'
}

export const loginActions = {
    login: 'login:login',
    logout: 'login:logout'
}

