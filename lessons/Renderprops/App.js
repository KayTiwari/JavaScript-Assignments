import React from 'react'
import Toggle from './shared/Toggle.js'

const App = () => {
    return (
        <div>
            <Toggle render={({isToggled, toggler}) => 
                <>
                    <h1>The Light is {isToggled ? "On" : "Off"}</h1>
                    <button onClick={toggler}>Light Switch</button>
                </>
            }/>
            <Toggle render={({isToggled: on, toggler: toggle}) => 
                <>
                    <h1>The Light is {on ? "On" : "Off"}</h1>
                    <button onClick={toggle}>Light Switch</button>
                </>
            }/>
        </div>
    )
}

export default App