import React, { Component } from 'react';

import { FotoComponent } from '../components'

export default class TimelineContainer extends Component {

    render() {
        return (
            <div className="fotos container">
                <FotoComponent/>
            </div>
        );
    }
}

