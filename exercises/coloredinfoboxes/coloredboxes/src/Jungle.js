import React from "react";

const Jungle = (props) => {
    const styles = {
        fontSize: "50px",
        // animal: props.animal,
        // diet: props.diet,
        backgroundColor: props.color,
        border: props.border,
        color: props.font
    }

    return (
        <div>
            <p style={styles}>My favorite animals are {props.animal}, they eat {props.diet}</p>
        </div>
    )
}

export default Jungle