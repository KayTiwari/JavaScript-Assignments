import React from 'react';

const JediDetail = (props) => {
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <h2>Bounty: ${props.id}</h2>
            <h2>{props.type}</h2>
            <h3>Status: {props.alive ? 'Alive' : 'KIA'}</h3>
            <img src={props.img}></img>
        </div>
    )
}
export default JediDetail