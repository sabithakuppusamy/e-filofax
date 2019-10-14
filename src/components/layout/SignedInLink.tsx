import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class SignedInLink extends Component {
    constructor(props:any) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <ul className="right">
                <li>
                    <NavLink to='/create' >New Schedule</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Log out</NavLink>
                </li>
                <li>
                    <NavLink to='/' className="btn btn-floating pink lighten-1">SK</NavLink>
                </li>        
            </ul>
        );
    }
}
 
export default SignedInLink;