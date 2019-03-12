import React, { Component } from 'react';
import Form from './Form';
import {withTodos} from './TodoProvider';

class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {
           toggled: true
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            toggled: !prevState.toggled
        }))
    }

    render() {
        let {todo, deleteTodo} = this.props;
        return (
            <div>
                {this.state.toggled ?
                    <div className='todo'>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                :
                    <Form button="Save Changes" type='edit' todo={todo} />
                    //Toggle used to differentiate between displaying a card w/ edit button vs form w/ submit button.
                }
            </div>
        );
    }
}

export default withTodos(Todo);