import React, { Component } from 'react'

class Product extends Component {
    state = {
        selectedProduct: {},
        quantity: ''
    };

    // onChangeHandler = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    addToCart = (product) => {
        // console.log('added porduct: ' + JSON.stringify(product));
        this.setState({
            selectedProduct: product
        }, () => this.props.addToCart(this.state.selectedProduct) );
    }

    render() {
        const product = this.props.product;
        return (
            <div className="product">
                <div className="product-image">
                    <img src={product.image} alt={product.name} height="200" width="200" />  {/* height="100" width="100" */}
                </div>
                <p className="product-name">{ product.name }</p>
                <p className="product-price">{ product.price } tng</p>
                {/* quantity:  */}
                <input type="text" name="quantity" className="quantity-input" value={this.props.productQuantity} />
                <div className="add-action">
                    <button type="button" className="add-to-cart-btn" onClick={this.addToCart.bind(this, product)}>ADD TO CART</button>
                </div>
            </div>
        );
    }
}

export default Product;