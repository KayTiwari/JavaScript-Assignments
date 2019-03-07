import React from 'react';

const ThreeCardMap = (props) => {
    const styles = {
        color: 'black'
    }

    return (
        <div>
        <h1 style={styles}>{props.name}</h1>
        <p>Upright: {props.meaningup}</p>
        <p>Reversed: {props.meaningdown}</p>
        <p>Number: {props.value}</p>
        </div>

    )
}
export default ThreeCardMap;