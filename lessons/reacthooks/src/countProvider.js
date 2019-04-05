import React, {useState} from 'react';


export const CountContext = React.createContext()

const CountProvider = props => {

    return (
        <CountContext.Provider 
        value={{
            counter,
            increment
        }}>
        {props.children}
        </CountContext.Provider>
    )
}

export default CountProvider