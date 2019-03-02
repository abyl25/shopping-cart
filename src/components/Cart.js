import React, { Component } from 'react'

class Cart extends Component {
    state = {
        cartProducts: []
    };

    UNSAFE_componentWillReceiveProps (nextProps) {
        // console.log('received props: ');
        // console.log(nextProps.cartProducts);
        this.setState({
            cartProducts: nextProps.cartProducts 
        });
    }

    render() {
        const cartProducts = this.state.cartProducts;
        console.log('cart products: ');
        console.log(cartProducts);

        let products = cartProducts.map(cartProduct => {
            return (
                <React.Fragment key={cartProduct.id}>
                    <p>{ cartProduct.name }</p>
                    <p>{ cartProduct.price }</p>
                    {/* onClick={this.props.removeProduct.bind(this, product.id)} */}
                    {/* eslint-disable-next-line */}
                    <a href="#" className="product-remove" onClick={this.props.removeFromCart.bind(this, cartProduct.id)}>x</a>
                </React.Fragment>
            );
        });

        let cartView;
        if (cartProducts.length === 0) {
            console.log('length is 0');
            cartView = '';
        } else {
            cartView = products;
        }
        
        return (
            <React.Fragment>
                <div className="cart-info">
                    <p>No. of items: 0</p>
                    <p>total price: 0</p>
                </div>
                <button className="show-cart-btn">
                    <img src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt=""/>
                    <span className="cart-count">0</span>
                </button>
                <div className="cart-preview">
                    { cartView }
                </div>
            </React.Fragment>
        );
    }
}

export default Cart;