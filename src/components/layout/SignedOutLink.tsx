import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class SignedOutLink extends Component {
    constructor(props:any) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <ul className="right">
                <li>
                    <NavLink to='/signin'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/register'>Register</NavLink>
                </li>       
            </ul>
        );
    }
}
 
export default SignedOutLink;