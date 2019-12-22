import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function FilterableTable(props) {
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState(products)

    return (
        <div>
            <SearchBar 
                searchText={searchText} 
                onSearchTextChange={this.handleSearchTextChange}/>
            <ProductTable 
                searchText={searchText} 
                products={products}/>
        </div>
    )
}
class FilterableTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            products: products
        }
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    }
    handleSearchTextChange(newSearchText) {
        this.setState({
            searchText: newSearchText
        })
    }

    render() {
        let searchText = this.state.searchText
        let products = this.state.products
        return (
            <div>
                <SearchBar 
                    searchText={searchText} 
                    onSearchTextChange={this.handleSearchTextChange}/>
                <ProductTable 
                    searchText={searchText} 
                    products={products}/>
            </div>
        )
    }
}

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

export default FilterableTable