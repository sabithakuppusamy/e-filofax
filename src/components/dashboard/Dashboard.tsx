import React, { Component } from 'react';
import TodoList from './TodoList';

class Dashboard extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TodoList/>
                    </div>
                </div>
            </div>       
        );
    }
}
 
export default Dashboard;