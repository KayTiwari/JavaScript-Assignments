import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Title from './Title';
import Login from './Login';
import Main from './Main';
import Register from './Register';
import InvisiSelect from './InvisiSelect';
import PongSelect from './PongSelect'
import PongGameComputer from './PongGameComputer'

const App = () => {
    return (
        <div>
             {/* <Title /> */}
            <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/Main' component={Main}/>
            <Route exact path='/Register' component={Register}/>
            <Route exact path='/InvisiSelect' component={InvisiSelect}></Route>
            <Route exact path='/PongSelect' component={PongSelect}></Route>
            <Route exact path='/PongGameComputer' component={PongGameComputer}></Route>
            </Switch>
        </div>
    )
}
export default App;