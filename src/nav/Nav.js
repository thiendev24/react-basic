import React from "react";
import { NavLink } from 'react-router-dom';

import './nav.scss'

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" end> Home </NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/form">Form</NavLink>
                <NavLink to="/list-users">List Users</NavLink>
                {/* <NavLink to="/details-user">Details Users</NavLink> */}
            </div>
        )
    }
}

export default Nav;