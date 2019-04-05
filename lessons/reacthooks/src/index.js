import React from 'react';
import ReactDOM from 'react';
import App from './App'
import CountProvider from './countProvider'

ReactDOM.render(<CountProvider><App /></CountProvider>, document.getElementById('root'));

