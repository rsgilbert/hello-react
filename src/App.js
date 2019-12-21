import React from 'react'
import './App.css'

function App() {
    return (
      <WelcomeDialog />
    )
}
 
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome to my dialog
            </h1>
            <p className="Dialog-message">
                How have you been
            </p>
        </FancyBorder>
    )
}
export default App