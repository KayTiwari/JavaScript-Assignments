import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()

        this.state ={
            todos: []
        }
    }

        // GET
        getTodos = () => {
            axios.get('https://api.vschool.io/marcus/todo').then(response => {
                //dont use async await on a globalized function, just use .then(response) -> Don't want to use an asynchronous function on multiple parts
            this.setState({
                    todos: response.data
                    //add response data to todos array
                })
            })
        }
    
        // POST
        postTodo = newTodo => {
            axios.post('https://api.vschool.io/marcus/todo', newTodo).then(response => {
                this.setState(prevState => ({
                    todos: [...prevState.todos, response.data]
                    //leave previous todo items alone and add response data to the end
                }))
            })
        }
    
        // PUT
        editTodo = (id, updatedTodo) => {
            axios.put(`https://api.vschool.io/marcus/todo/${id}`, updatedTodo).then(res => {
                this.setState(prevState => ({
                    todos: prevState.todos.map(todo => todo._id === id ? todo = updatedTodo : todo)
                    //Map previous todos, but if a specific id is found, replace it.
                }))
            })
        }
    
    
        // DELETE
        deleteTodo = id => {
            axios.delete(`https://api.vschool.io/marcus/todo/${id}`).then(response => {
                this.setState(prevState => ({
                    todos: prevState.todos.filter(todo => todo._id !== id)
                    //Filter through previous todos and keep all todos as long as the id is not equal to this particular one.
                }))
            })
        }


    render() {
        return (
            <Provider value={{
                getTodos: this.getTodos,
                postTodo: this.postTodo,
                editTodo: this.editTodo,
                deleteTodo: this.deleteTodo,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default TodoProvider;

export function withTodos (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}   