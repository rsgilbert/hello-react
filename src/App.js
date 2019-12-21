import React from 'react'
import './App.css'

function App() {
    return (
      <Calculator />
    )
}

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>Water will boil</p>
    }
    return <p>Water will NOT boil</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
    return (parseFloat(fahrenheit) - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (parseFloat(celsius) * 9 / 5) + 32;
}


class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {
            temperature: 27,
            scale: 'c'
        }
    }

    handleCelsiusChange(newTemperature) {
        this.setState({
            temperature: newTemperature,
            scale: 'c'
        })
    }

    handleFahrenheitChange(newTemperature) {
        this.setState({
            temperature: newTemperature,
            scale: 'f'
        })
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        let celsius
        let fahrenheit
        if(scale === 'c') {
            celsius = temperature
            fahrenheit = toFahrenheit(temperature)
        } else if(scale === 'f') {
            celsius = toCelsius(temperature)
            fahrenheit = temperature
        }
        return (
            <div>
                <TemperatureInput 
                    temperature = { celsius }
                    scale='c'
                    onTemperatureChange = { this.handleCelsiusChange } />
                <TemperatureInput
                    temperature = { fahrenheit }
                    scale= 'f' 
                    onTemperatureChange = { this.handleFahrenheitChange }/>
            </div>
        )
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    
    }
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        let temperature 
        let scale
        if(this.props.scale === 'c') {
            temperature = this.props.temperature
            scale = this.props.scale
        } else {
            temperature = this.props.temperature
            scale = this.props.scale
        }
        return (
            <fieldset>
                <legend>Enter temperature in { scaleNames[scale] }</legend>
                <input
                    value = { temperature }
                    onChange = { this.handleChange } />
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}
export default App