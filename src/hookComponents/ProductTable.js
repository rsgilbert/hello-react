import React from 'react'
import ProductItem from './ProductItem'

const headingElement = <h3>Products we have</h3>

function ProductTable(props) {
    const searchText = props.searchText
    const products = props.products.filter(
        product => product.name.toLowerCase()
            .includes(searchText)
    )
    return (
        <div>
            { headingElement }
            <ul>
                { products.map(
                    product => 
                    <ProductItem 
                        product={product} 
                        key={product.name}/>
                )}
            </ul>                
        </div>
    )
}



export default ProductTable

