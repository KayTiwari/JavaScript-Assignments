import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Title from './Title';
import Login from './Login';
import Main from './Main';

const App = () => {
    return (
        <div>
             <Title />
            <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/Main' component={Main}/>
            </Switch>
        </div>
    )
}
export default App;