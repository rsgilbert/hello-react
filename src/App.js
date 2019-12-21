import React from 'react'
import './App.css'

const unreadMessages = [
    "Mary likes you",
    "Solomon is a bright young man", 
    "I love Predrosa",
]
function App() {
    return (
       <Message unreadMessages={ unreadMessages }/> 
    )
}

function Message(props) {
    const unreadMessageCount = props.unreadMessages.length
    return <div>
        <h4>Hello campuser,</h4>
        { unreadMessageCount > 0 && 
            <h2>
                You have { unreadMessageCount } unread messages
            </h2>
        } 
    </div>
}


export default App