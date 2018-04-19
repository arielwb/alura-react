import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MenuContainer extends Component {

    render() {
        return (
            <div>
                <div id="menu">
                    <div className="pure-menu">

                        <Link className="pure-menu-heading" to="/">Company</Link>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                            <li className="pure-menu-item"><Link to="/authors" className="pure-menu-link">Authors</Link></li>
                            <li className="pure-menu-item"><Link to="/books" className="pure-menu-link">Books</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

