import React, {Component} from 'react';
import Title from '../Title.js'

class TitleScreen extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* <span className='centerScreen title'>SpaceFighter V</span> */}
                <span className='centerScreen title'><Title /></span>
                <span className='centerScreen pressSpace mt-5'>Press Enter to start</span>
            </div>
        )
    }
}
export default TitleScreen