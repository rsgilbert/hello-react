import React, { useState, useEffect } from 'react'
import './App.css'
import FilterableTable from './components/FilterableTable'

function App() {
    return (
        <FilterableTable />
    )
}

function HookExample() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = "Count is " + count 
    })

    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={ () => setCount(count + 1) }>
                Increase Counter
            </button>
            <button onClick={ () => setCount(count -1) }>
                Reduce counter
            </button>
        </div>
    )
}

export default App