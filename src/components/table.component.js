import React, { Component } from 'react';

export default class TableComponent extends Component {
    render() {
        return (
            <table className="pure-table">
                <thead>
                    <tr>
                        {this.props.headers.map((header) => {
                            return (<th>{header}</th>);
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.values.map((obj, key) => {
                            return (
                                <tr key={key}>
                                    {
                                        Object.keys(obj).forEach(key => {
                                            return (<td>{obj[key]}</td>);
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

