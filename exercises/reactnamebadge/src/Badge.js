import React from 'react';

const Badge = (props) => {
    const style = {
        backgroundColor: 'black',
        color: 'white',
        border: 'solid black'
    }
    const boxstyle = {
        border: 'solid black'
    }
    console.log(props);
    return (
        <div style={boxstyle}>
            <div style={style}>Badge</div>
            <div>
                <p>Name:{props.firstName}{props.lastname}</p>
                <p>Phone:{props.phone}</p>
                <p>Email:{props.email}</p>
                <p>Place of Birth:{props.POB}</p>
                <p>Favorite food:{props.food}</p>
                <p>Description:{props.desc}</p>
            </div>
        </div>
    )
}

export default Badge