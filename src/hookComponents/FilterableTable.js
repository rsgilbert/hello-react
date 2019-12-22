import React, { useState } from 'react'
import SearchBar from '../hookComponents/SearchBar'
import ProductTable from '../hookComponents/ProductTable'

function FilterableTable(props) {
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState(allProducts)

    return (
        <div>
            <SearchBar 
                searchText={searchText} 
                onSearchTextChange={setSearchText}/>
            <ProductTable 
                searchText={searchText} 
                products={products}/>
        </div>
    )
}

const allProducts = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

export default FilterableTable