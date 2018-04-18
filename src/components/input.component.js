import React, { Component } from 'react';

export default class InputComponent extends Component {
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
            </div>
        );
    }
}

