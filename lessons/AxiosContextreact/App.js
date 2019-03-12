import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import './App.css'

const App = () => {
  return (
    <div>
      <Form button='Submit' type='add' />
      <TodoList />
    </div>
  );
};

export default App;