import React from 'react'

function ProductItem(props) {
    return (
        <li>
            { props.product.name }
        </li>
    )
}

export default ProductItem