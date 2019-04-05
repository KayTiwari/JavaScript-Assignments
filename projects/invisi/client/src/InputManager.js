import React, {Component} from 'react';


const KEY = {
    LEFT: 37,
    RIGHT: 39,
    A: 65,
    D: 68,
    SPACE: 32,
    ENTER: 13
}

class InputManager extends Component{
    constructor(){
        super();

        this.state = {
            left: 0,
            right: 0,
            space: 0,
            enter: 0
        }
    }
    bindKeys = () => {
        window.addEventListener('keyup', this.handleKeys.bind(this, false));
        window.addEventListener('keydown', this.handleKeys.bind(this, true));
    }

    unbindKeys = () => {
        window.removeEventListener('keyup', this.handleKeys);
        window.removeEventListener('keydown', this.handleKeys);
    }

    handleKeys = (value, e)
}

export default InputManager;