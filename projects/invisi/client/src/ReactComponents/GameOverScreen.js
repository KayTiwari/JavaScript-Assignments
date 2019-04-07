import React, {Component} from 'react';
import '../App.css'

class GameOverScreen extends Component {
    constructor(args) {
        super();

        this.state = {
            score: args.score
        }
        console.log(args);
    }

    render(props) {
        return (
            <div>
                <span className="centerScreen title">Game End</span>
                <span className="centerScreen score">Score: {this.state.score}</span>
                <span className="centerScreen pressEnter">Press enter to re-try</span>
                <span className="centerScreen pressSpace">Press space to save your score</span>
            </div>
        )
    }
}

export default GameOverScreen;
