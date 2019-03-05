import React from 'react';
import Product from './Product';

const Products = (props) => {
    const productsList = props.products;
    const searchName = props.searchName;

    const search = (term) => {
        return prod => prod.name.toLowerCase().includes(term.toLowerCase())           
    }
    const products = productsList.filter(search(searchName)).map(product => <Product key={product.id} 
        product={product} productQuantity={props.productQuantity} addToCart={props.addToCart} 
        onChangeHandler={props.onChangeHandler} />); 
    
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

export default Products;