import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TProvider from './TProvider';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
    <TProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </TProvider>,
    document.getElementById('root')
);