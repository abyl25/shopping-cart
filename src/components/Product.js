import React, { Component } from 'react'

class Product extends Component {
    render() {
        const product = this.props.product;
        return (
            <div>
                <div className="image">
                    <img src={product.image} alt={product.name} height="100" width="100"/>
                </div>
                <p>{ product.name }</p>
                <p>{ product.price }</p>
                quantity: <input type="text" name="quantity"/>
                <button type="button">Add to cart</button>
            </div>
        );
    }
}

export default Product;