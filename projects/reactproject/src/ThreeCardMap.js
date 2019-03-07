import React from 'react';

const ThreeCardMap = (props) => {
    return (
        <div>
            <h1>Hello world</h1>
        <h1>{props.name}</h1>
        <p>{props.meaningup}</p>
        <p>{props.meaningdown}</p>
        </div>
    )
}
export default ThreeCardMap;