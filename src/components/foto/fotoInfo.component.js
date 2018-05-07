import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class FotoInfoComponent extends Component {

    render() {
        let likers = this.props.foto.likers || [];
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                    {
                        likers.map((liker, i) => {
                            let name = liker.login + (i < likers.length - 1 ? ', ' : '');
                            return (<Link key={i} to={'/timeline/' + liker.login}>{name}</Link>)
                        })
                    }
                    <span>{likers.length > 0 ? (likers.length === 1 ? ' curtiu' : ' curtiram') : ''}</span>

                </div>

                <p className="foto-info-legenda">
                    <Link className="foto-info-autor" to={'/timeline/' + this.props.foto.nome}>{this.props.foto.loginUsuario}</Link>
                    <span>{this.props.foto.comentario}</span>
                </p>

                <ul className="foto-info-comentarios">
                    {
                        this.props.foto.comentarios.map((comment, index) => {
                            return (
                                <li className="comentario" key={index}>
                                    <Link className="foto-info-autor" to={'/timeline/' + comment.login}>{comment.login}</Link>
                                    <span style={{marginLeft: '5px'}}>{comment.texto}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

