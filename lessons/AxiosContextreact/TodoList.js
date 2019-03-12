import React, { Component } from 'react';
import Todo from './Todo'
import {withTodos} from './TodoProvider'

class TodoList extends Component {
    componentDidMount(){
        this.props.getTodos()
    }

    render() {
        const mappedTodos = this.props.todos.map(todo => <Todo key={todo._id} todo={todo} />)
        //Passing the Todo component the id as a key and other information
        return (
            <div className='todo-list'>
                {mappedTodos}
            </div>
        );
    }
}

export default withTodos(TodoList);