import React from "react";
import { Link } from 'react-router-dom';

import './nav.scss'

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <Link className="active" to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/form">Form</Link>
            </div>
        )
    }
}

export default Nav;