import React, { Component } from 'react';

export default class TableComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <table className="pure-table">
                <thead>
                    <tr>
                        {this.props.headers.map((header, key) => {
                            return (<th key={key}>{header}</th>);
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.values.map((obj, key) => {
                            return (
                                <tr key={key}>
                                    {
                                        Object.keys(obj).map((name, index) => {
                                            return (<td key={index}>{obj[name]}</td>)
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

