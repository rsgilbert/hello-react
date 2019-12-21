import React from 'react'
import './App.css'

const unreadMessages = [
    "Mary likes you",
    "Solomon is a bright young man", 
    "I love Predrosa",
]

const listItemMessages = unreadMessages.map(
    message => <li>{ message }</li>
)

function UnOrderedList(props) {
    return (
        <ul>{ props.listItems }</ul>
    )
}

function App() {
    return (
       <Notifications unreadMessages={ unreadMessages }/> 
    )
}

function Notifications(props) {
    const unreadMessageCount = props.unreadMessages.length
    return <div>
        <h4>Hello campuser,</h4>
        { unreadMessageCount > 0 && 
            <h2>
                You have { unreadMessageCount } unread messages
            </h2>
        } 
        <UnOrderedList listItems={listItemMessages} />
    </div>
}


export default App