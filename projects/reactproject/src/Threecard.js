import React, { Component } from 'react';
import {withProvider} from './TProvider'
import ThreeCardMap from './ThreeCardMap';

class Threecard extends Component {
    constructor() {
        super();

        this.state = {
            newlist: []
        }
    }


    componentDidMount(){
        this.props.getList()
    }

    componentDidUpdate() {
        // console.log(this.props.list);
        console.log(this.props.list.cards[1]);
    }

    getRead = () => {
        
    }

    render() {
        console.log(this.props.list);
        // console.log(this.props.list.cards[0]);
        // if (this.props.list !== undefined) {
        //     this.props.list.map((list) => {
        // return (
        // <div>
        // <ThreeCardMap key={list.value_int} name={list.name} meaningup={list.meaning_up} meaningdown={list.meaning_rev}/>
        // </div>
        // )})}
        return (
            <div>
                <h1>Three Card Map</h1>
                {this.props.list.cards ? this.props.list.cards.map((list) =>{return (<ThreeCardMap value={list.value_int} name={list.name} meaningup={list.meaning_up} meaningdown={list.meaning_rev}/>)}) : null}
                <button onClick={this.getRead}>Get Read</button>
            </div>
        )
        }
    }
export default withProvider(Threecard);