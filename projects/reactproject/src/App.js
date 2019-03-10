import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import Main from './Main'
import Fivecard from './Fivecard'
import ThreeCardDisp from './ThreeCardDisp'
//Landing page
const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Main' component={Main}/>
            <Route exact path='/Threecard' component={ThreeCardDisp} />
            <Route exact path='/Fivecard' component={Fivecard}/>
        </Switch>
        
    )
}
export default App