import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoProvider from './TodoProvider'

ReactDOM.render(
    <TodoProvider>
        <App />
    </TodoProvider>, 
    //Wrap App in TodoProvider to have access to the axios functions and 
    document.getElementById('root'));
