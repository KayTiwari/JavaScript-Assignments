import React, {Component} from 'react';

class TitleScreen extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <span className='centerSceen title'>SpaceFighter V</span>
                <span className='centerScreen pressSpace'>Press Enter to start</span>
            </div>
        )
    }
}
export default TitleScreen