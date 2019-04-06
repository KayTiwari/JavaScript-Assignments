import React, {Component} from 'react';

class Ship extends Component{
    constructor(args){
        this.position = args.position;
        this.speed = args.speed;
        this.radius = args.radius;
        this.delete = false;
        this.onDie = args.onDie;
    }
    update = (keys) => {
        if (keys.right) {
            this.position.x += this.speed;
        } else if (keys.left) {
            this.position.x -= this.speed;
        }
    }
    render() {
        if (this.position.x > this.state.screen.width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = this.state.screen.width;
        }
        if (this.position.y > this.state.screen.height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = this.state.screen.height;
        }
        const context = this.state.context;
        context.save();
        context.translate(this.position.x, this.position.y);
        context.strokeStyle = '#ffffff';
        context.fillStyle = '#ffffff';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(0, -25);
        context.lineTo(15, 15);
        context.lineTo(5, 7);
        context.lineTo(-5, -7);
        context.lineTo(-15, 15);
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();

        return(
            <div></div>
        )
    }
}
export default Ship