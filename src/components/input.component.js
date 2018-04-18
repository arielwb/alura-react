import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class InputComponent extends Component {

    constructor() {
        super();
        this.state = {
            error: ""
        };
    }

    componentDidMount() {
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
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    id={this.props.id}
                    type={this.props.type}
                    name={this.props.id}
                    value={this.props.value}
                    onChange={this.props.onchange} />
                <span className="error">{this.state.error}</span>
            </div>
        );
    }
}

