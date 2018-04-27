import React, { Component } from 'react';

export default class FotoHeaderComponent extends Component {

    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src={this.props.avatar} alt="foto do usuario" />
                    <figcaption className="foto-usuario">
                        <a >{this.props.nome}</a>
                    </figcaption>
                </figure>
                <time className="foto-data">{this.props.data}</time>
            </header>
        );
    }
}

