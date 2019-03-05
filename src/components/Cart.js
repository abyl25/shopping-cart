import React, { useEffect, useRef } from 'react';

const Cart = (props) => {
    const cartPreview = useRef(null);
    const cartProducts = props.cartProducts;
    // console.log('cart products: ');
    // console.log(cartProducts);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside.bind(this), true);
        
        return function cleanup() {
            document.removeEventListener("click", handleClickOutside.bind(this), true);
        }
    });

    const handleClickOutside = (event) => {
        const cartNode = cartPreview.current;
        if (cartNode.classList.contains("active")) {
            if (!cartNode || !cartNode.contains(event.target)) {
                props.toggleShowCart();
                event.stopPropagation();
            }
        }
    }

    let products = cartProducts.map(cartProduct => {
        return (
            <li className="cart-item" key={cartProduct.id}>
                <img className="product-image" src={cartProduct.image} alt="" width="48" height="48"/>
                <div className="product-info">
                    <p>{ cartProduct.name }</p>
                    <p>{ cartProduct.price }</p>
                </div>
                <div className="product-total">
                    <p>1 No.</p>
                    <p>1 tng</p>
                </div>
                <button className="product-remove" onClick={props.removeFromCart.bind(this, cartProduct.id)}>×</button>
            </li>
        );
    });

    let cartView;
    if (cartProducts.length === 0) {
        cartView = <h2 className="empty-cart">Cart is Empty</h2>;
    } else {
        cartView = products;
    }
    
    return (
        <React.Fragment>
            <div className="cart-info">
                <p>No. of items: 0</p>
                <p>total price: 0</p>
            </div>
            <button className="show-cart-btn" onClick={props.toggleShowCart} >
                <img src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt=""/>
                <span className="cart-count">0</span>
            </button>
            <div className={props.showCart ? "cart-preview active" : "cart-preview"} ref={cartPreview} >
                <ul className="cart-items">
                    { cartView }
                </ul>
                <div className="cart-body">
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cart;