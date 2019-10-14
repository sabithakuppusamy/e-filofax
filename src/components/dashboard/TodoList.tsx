import React, { Component } from 'react';
import TodoSummary from './TodoSummary'

class TodoList extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div className="todo-list section">
            <TodoSummary/>
            <TodoSummary/>
            <TodoSummary/>
            <TodoSummary/>
        </div>
        );
    }
}
 
export default TodoList;