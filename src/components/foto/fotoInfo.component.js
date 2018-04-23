import React, { Component } from 'react';

export default class FotoInfoComponent extends Component {

    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">

                    <a href="#">alots_ssa</a>
                    <span>,</span>

                    <a href="#">rafael_rollo</a>
                    <span>curtiram</span>

                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?</span>
                </p>

                <ul className="foto-info-comentarios">
                    <li className="comentario">
                        <a className="foto-info-autor">seguidor </a>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?</span>
                    </li>
                </ul>
            </div>
        );
    }
}

