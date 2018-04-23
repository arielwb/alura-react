import React, { Component } from 'react';

import FotoHeaderComponent from './fotoHeader.component';
import FotoInfoComponent from './fotoInfo.component';
import FotoAtualizacoesComponent from './fotoAtualizacoes.component';

export default class FotoComponent extends Component {

    render() {
        return (
            <div className="foto">
                <FotoHeaderComponent />
                <img alt="foto" className="foto-src" src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-15/e35/14482111_1635089460122802_8984023070045896704_n.jpg?ig_cache_key=MTM1MzEzNjM4NzAxMjIwODUyMw%3D%3D.2" />
                <FotoInfoComponent />
                <FotoAtualizacoesComponent />
            </div>
        );
    }
}

