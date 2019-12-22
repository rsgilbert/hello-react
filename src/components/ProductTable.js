import React from 'react'

class ProductTable extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                I am your ProductTable
                {this.props.searchText}
            </div>
        )
    }
}

export default ProductTable

