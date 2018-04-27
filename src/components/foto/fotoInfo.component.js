import React, { Component } from 'react';

export default class FotoInfoComponent extends Component {


    render() {
        let likers = this.props.likers || [];
        console.log(likers)
        return (
            <div className="foto-info">
                <div className="foto-info-likes">

                    {
                        likers.map((liker, i) => {
                            let name = liker + (i < likers.length - 1 ? <span>, </span> : '');
                            return (<a>{name}</a>)
                        })
                    }
                    <span>{likers.length > 0 ? 'curtiram' : ''}</span>

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

