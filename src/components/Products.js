import React, { Component } from 'react'
import Product from './Product';

class Products extends Component {
    render() {
        const products = this.props.products;
        return (
            <div>
                { products.map(product => <Product key={product.id} product={product}/> ) }
            </div>
        );
    }
}

export default Products;