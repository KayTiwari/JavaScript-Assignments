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
    }
    render() {
        console.log(this.props.list);
        const MappedTarot = this.props.list.map(list => <ThreeCardMap key={list.value_int} name={list.name} meaningup={list.meaning_up} meaningdown={list.meaning_rev}/>)
        return (
            <div>
                <h1>Three Card Reading</h1>
                <div>{MappedTarot}</div>
            </div>
        )
        }
    }
export default withProvider(Threecard);