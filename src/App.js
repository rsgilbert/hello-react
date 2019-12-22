import React, { useState } from 'react'
import './App.css'
import FilterableTable from './components/FilterableTable'

function App() {
    return (
        <HookExample />
    )
}

function HookExample() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={ () => setCount(count + 1) }>
                Click Me
            </button>
        </div>
    )
}

export default App