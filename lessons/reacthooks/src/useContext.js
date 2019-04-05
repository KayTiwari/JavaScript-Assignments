import React, {useContext} from 'react'
import { CountContext } from './countProvider'

const App = () => {
    const data = useContext(CountContext)
    return (
        <div>
            <h1>{counter}</h1>
            <button>Increment</button>
        </div>
    )
}