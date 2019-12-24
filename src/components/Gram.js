import React, { useState, useEffect } from 'react'
import Header from './Header'
import TabBar from './TabBar'
import Main from './Main'

const tabs = {
    F: 'Feed',
    N: 'Notifications',
    M: 'Menu'
}
function Gram(props) {
    const [searchText, setSearchText] = useState('')
    const [feed, setFeed] = useState(allFeed)
    const [notifications, setNotifications] = useState(allNotifications)
    const [openTab, setOpenTab] = useState('F')
    
    return (
        <div
            className="container"
            >
            <Header onSearchTextChange={setSearchText} />
            <TabBar onOpenTab={setOpenTab} />
            <Main />
        </div>
    )
}

const allFeed = [
    'Joan posted',
    'Return from Kipi',
    'Merry Kuliisa mani'
]

const allNotifications = [
    'John liked your video',
    'Sarah commented'
]

export default Gram