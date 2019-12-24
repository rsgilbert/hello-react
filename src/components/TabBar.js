import React from 'react'

function TabBar(props) {
    return (
        <nav 
            className="nav justify-content-between 
            border text-primary px-2"
            >
            <div className="header-icon">Feed</div> 
            <div className="header-brand">Notifications</div>
            <div className="header-icon">Menu</div>
        </nav>
    )
}

export default TabBar