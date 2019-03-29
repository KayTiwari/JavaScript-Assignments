import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import JProvider from './JProvider';

ReactDOM.render(<JProvider>
    <App />
    </JProvider>, document.getElementById('root'));