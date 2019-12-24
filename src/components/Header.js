import React from 'react'
function Header(props) {

    return (
        <nav 
            className="nav justify-content-between
                border text-primary px-2"
            >
            <div className="header-icon">Search</div> 
            <div className="header-brand">gram</div>
            <div className="header-icon">Add</div>
        </nav>
    )
}

export default Header