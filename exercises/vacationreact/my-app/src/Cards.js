import React from 'react';

const Cards = (props) => {
    const style = {
        backgroundColor: props.color,
        borderRadius: 10,
        border: 'solid'


    }
    return  <div style={style}>
        <h1>{props.place}</h1>
        <h2>{props.price}</h2>
        <h3>{props.time}</h3>
    </div>

}
export default Cards