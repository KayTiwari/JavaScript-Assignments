import React, {Component} from 'react';
import TitleScreen from './ReactComponents/TitleScreen'
import App from './App'

const width = 800;
const height = 800;
const ratio = window.devicePixelRatio || 1

class Canvas extends Component {
    constructor(){
        super();

        this.state = {
            screen: {
                width: width,
                height: height,
                ratio: ratio
            }
        }
    }
    render() {
        return (
            <div>
                <TitleScreen />
                <canvas ref="canvas" id='canvas' width={this.state.screen.width * this.state.screen.ratio}
            height={this.state.screen.height * this.state.screen.ratio}/>
            </div>
        );
    }
}

export default Canvas