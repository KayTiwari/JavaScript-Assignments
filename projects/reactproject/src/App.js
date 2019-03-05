import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Main from './Main'

//Landing page
const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Main' component={Main}/>
        </Switch>
        
    )
}
export default App