import React from 'react'

function SearchBar(props) {
    function handleChange(e) {
        props.onSearchTextChange(e.target.value)
    }
    return (
        <div>
            <label>
                Search Products
                <input 
                    placeholder="Search"
                    onChange={handleChange}
                    />
            </label>
        </div>
    ) 
}

export default SearchBar