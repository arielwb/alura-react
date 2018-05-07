import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class FotoHeaderComponent extends Component {

    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src={this.props.avatar} alt="foto do usuario" />
                    <figcaption className="foto-usuario">
                        <Link to={'/timeline/' + this.props.nome}>{this.props.nome}</Link>
                    </figcaption>
                </figure>
                <time className="foto-data">{this.props.data}</time>
            </header>
        );
    }
}

