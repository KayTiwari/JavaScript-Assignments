import React from 'react';
import React, { useState } from 'react';

// For a number data type
const Hook = () => {
    const [counter, setCounter] = useState(0)
    // takes an initial state value (counter) and a method (setCounter) for updating it


    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>increment</button>
        </div>
    )
}