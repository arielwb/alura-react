import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class InputComponent extends Component {

    constructor() {
        super();
        
        this.state = {
            error: "",
            label: '',
            input: []
        };
    }

    componentDidMount() {
        let inputOpt = Object.assign({}, this.props)
        if(inputOpt.label){
            delete inputOpt.label
        }
        this.setState({
            label: this.props.label,
            input: inputOpt
        })
        PubSub.subscribe('validationError', (topic, error) => {
            if (error.field === this.props.id) {
                this.updateErrorState(error.defaultMessage);
            }
        })
        PubSub.subscribe('validationErrorClear', () => {
            this.updateErrorState('');
        })
    }

    updateErrorState(newState) {
        this.setState({ error: newState })
    }

    render() {
        return (
            <div className="pure-control-group">
                <label htmlFor={this.state.input.id}>{this.state.label}</label>
                <input {...this.state.input} />
                <span className="error">{this.state.error}</span>
            </div>
        );
    }
}

