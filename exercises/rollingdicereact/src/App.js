import React, {Component} from 'react';
import DiceBox from './DiceBox';


class App extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
        <div>
            <DiceBox/>
        </div>
        )
    }
}
export default App