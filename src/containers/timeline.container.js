import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import api from '../services/api';
import { FotoComponent } from '../components'
import { HeaderContainer } from './';
import Timeline from '../services/timeline';


class TimelineContainer extends Component {
    constructor(props) {
        super(props);
        this.user = this.props.match.params.user;
        this.canViewTimeline = !!this.user || api.hasToken();

        console.log(this.props)
    }

    componentDidMount() {
        if (this.canViewTimeline) {
            this.populateTimeline();
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (this.user !== nextProps.match.params.user) {
            this.user = nextProps.match.params.user;
            this.populateTimeline();
        }
    }

    populateTimeline() {
        let promise = this.user ? api.getFotosByUser(this.user) : api.getTimeline();
        this.props.lista(promise);
    }

    render() {
        console.log('test')
        return this.canViewTimeline ?
            (<div id="root">
                <div className="main">
                    <HeaderContainer />
                    <div className="fotos container">
                        {
                            this.props.fotos.map((foto, index) => <FotoComponent foto={foto} key={index} like={this.props.like} comenta={this.props.comenta} />)
                        }
                    </div>
                </div>
            </div>) :
            (<Redirect to="/" />);
    }
}

const mapStateToProps = state => {
    return { fotos: state.timelineReducer }
}

const mapDispatchToProps = dispatch => {
    return {
        like: fotoId => {
            console.log('like')
            dispatch(Timeline.like(fotoId));
        },
        comenta: (fotoId, textoComentario) => {
            console.log('comenta')
            dispatch(Timeline.comenta(fotoId, textoComentario));
        },
        lista: promise => {
            dispatch(Timeline.getList(promise));
        }
    }
}

const TimelineGlue = connect(mapStateToProps, mapDispatchToProps)(TimelineContainer)

export default TimelineGlue;