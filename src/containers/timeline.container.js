import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import api from '../services/api';

import { FotoComponent } from '../components'
import { HeaderContainer } from './';


export default class TimelineContainer extends Component {
    constructor(props) {
        super(props);
        
        this.user = this.props.match.params.user;
        this.canViewTimeline = !!this.props.user || api.hasToken();

    }

    componentWillMount() {
        this.props.store.subscribe((fotos) => {
            this.setState({ fotos });
        })
    }

    componentDidMount() {
        this.populateTimeline();
    }

    componentWillReceiveProps(nextProps) {

        this.user = nextProps.match.params.user;
        this.populateTimeline();
    }

    populateTimeline() {
        let promise = this.user ? api.getFotosByUser(this.user) : api.getTimeline();
        this.props.store.get(promise);
    }

    like(fotoId) {
        this.props.store.like(fotoId);
    }

    render() {

        return this.canViewTimeline ?
            (<div id="root">
                <div className="main">
                    <HeaderContainer store={this.props.store} />
                    <div className="fotos container">
                        {
                            this.props.store.fotos.map((foto, index) => <FotoComponent foto={foto} key={index} like={this.like.bind(this)} comenta={this.comenta} />)
                        }
                    </div>
                </div>
            </div>) :
            (<Redirect to="/" />);
    }
}

