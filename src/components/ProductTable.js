import React from 'react'
import ProductItem from './ProductItem'

const headingElement = <h3>Products we have</h3>

class ProductTable extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const searchText = this.props.searchText
        const products = this.props.products.filter(
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
}

export default ProductTable

