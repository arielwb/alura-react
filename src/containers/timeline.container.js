import React, { Component } from 'react';

import { FotoComponent } from '../components'
import api from '../services/api';

export default class TimelineContainer extends Component {
    constructor() {
        super();
        this.state = {
            fotos: []
        }
    }

    componentDidMount() {
        api.getFotos('vitor')
            .then(response => response.json())
            .then(fotos => this.setState({ fotos: fotos }))
            .catch(err => console.log(err))

    }

    render() {
        console.log(this.state.fotos)
        return (
            <div className="fotos container">
                {
                    this.state.fotos.map((foto, index) => <FotoComponent foto={foto} key={index} />)
                }
            </div>
        );
    }
}

