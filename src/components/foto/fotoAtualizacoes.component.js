import React, { Component } from 'react';

export default class FotoAtualizacoesComponent extends Component {


    like(event) {
        event.preventDefault();
        this.props.like(this.props.foto.id)
    }
    
    comenta(event) {
        event.preventDefault();
        this.props.comenta(this.props.foto.id, this.comentario.value)
    }

    render() {
        return (
            <section className="fotoAtualizacoes">
                <a onClick={this.like.bind(this)} className={this.props.foto.likeada ? "fotoAtualizacoes-like-ativo fotoAtualizacoes-like" : "fotoAtualizacoes-like"}>Likar</a>
                <form className="fotoAtualizacoes-form" onSubmit={this.comenta.bind(this)}>
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" ref={input => this.comentario = input}/>
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>
            </section>
        );
    }
}

