import React, { Component } from 'react';

import FotoHeaderComponent from './fotoHeader.component';
import FotoInfoComponent from './fotoInfo.component';
import FotoAtualizacoesComponent from './fotoAtualizacoes.component';

export default class FotoComponent extends Component {
    

    render() {
        return (
            <div className="foto">
                <FotoHeaderComponent avatar={this.props.foto.urlPerfil} nome={this.props.foto.loginUsuario} data={this.props.foto.horario}/>
                <img alt="foto" className="foto-src" src={this.props.foto.urlFoto} />
                <FotoInfoComponent likers={this.props.foto.likers}/>
                <FotoAtualizacoesComponent />
            </div>
        );
    }
}

