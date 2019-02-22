import React from "react";

const House = (props) => {
    const styles = {
        fontSize: "100px",
        color: props.color
    }

    return (
        <div>
            <p style={styles}>My house is {props.color}, It has a {props.pet}</p>
        </div>
    )
}

export default House