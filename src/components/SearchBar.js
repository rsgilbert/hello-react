import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.onSearchTextChange(e.target.value)
    }
    render() {
        return (
            <div>
                <label>
                    Search Products
                    <input 
                        placeholder="Search"
                        onChange={this.handleChange}
                        />
                </label>
            </div>
        )
    }
}

export default SearchBar