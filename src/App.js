import React from 'react'
import './App.css'


function App() {
    return (
        <div>
            <Toggle/>
        </div>
    )
}

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { toggleOn: false }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(state => ({
            toggleOn: !state.toggleOn
        }))
    } 

    render() {
        return <button onClick={this.handleClick}>
            { this.state.toggleOn ? "ON" : "OFF" }
        </button>
    }
}
export default App