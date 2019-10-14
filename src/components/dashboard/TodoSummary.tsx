import React, { Component } from 'react';
 
class TodoSummary extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div className="card z-depth-0 todo-summary">
            <div className="card-content grey-text text-darkrn-3">
                <span className="card-title black-text">Daily plan</span>
               
                <ul className="black-text">
                    <li>Code</li>
                    <li>Eat</li>
                    <li>Sleep</li>
                    <li>Repeat</li>
                </ul>
                
                <div className="lighten-4 grey-text">
                    <div>28th July-2018</div>
                </div>
            </div>            
        </div>        
        );
    }
}
 
export default TodoSummary;