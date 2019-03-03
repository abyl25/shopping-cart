import React, { Component } from 'react'
import Product from './Product';

class Products extends Component {
    render() {
        const productsList = this.props.products;
        const searchName = this.props.searchName;

        const search = (term) => {
            return prod => prod.name.toLowerCase().includes(term.toLowerCase())           
        }
        const products = productsList.filter(search(searchName)).map(product => <Product key={product.id} 
            product={product} productQuantity={this.props.productQuantity} addToCart={this.props.addToCart} />); 
        
        let viewProducts;
        if (products.length === 0 && searchName) {
            viewProducts = 'no results';
        } else {
            viewProducts = products;
        }

        return (
            <div className="products-container">
                <div className="products">
                    { viewProducts }
                </div>
            </div>
        );
    }
}

export default Products;