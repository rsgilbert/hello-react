import React from 'react'
import './App.css'

function App() {
    return (
       <NameForm />
    )
}

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            value: event.target.value.toUpperCase()
        })
    }
    handleSubmit(event) {
        alert(`Name is submitted: state value: ${this.state.value}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text"
                        value={this.state.value} 
                        onChange={this.handleChange}
                        />
                </label>
                <input type="submit" value="Submit Form"/>
            </form>
        )
    }
}

export default App