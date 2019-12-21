import React from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable />
            </div>
        )
    }
}

export default FilterableTable