import React, { Component } from 'react'
import Product from './Product';

class Products extends Component {
    render() {
        const products = this.props.products;
        return (
            <div className="products-container">
                <div className="products">
                    { products.map(product => <Product key={product.id} product={product} 
                      productQuantity={this.props.productQuantity} addToCart={this.props.addToCart}/>) }
                </div>
            </div>
        );
    }
}

export default Products;