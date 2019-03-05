import React from 'react';

const Product = (props) => {
    const product = props.product;

    return (
        <div className="product">
            <div className="product-image">
                <img src={product.image} alt={product.name} height="200" width="200" />  {/* height="100" width="100" */}
            </div>
            <p className="product-name">{ product.name }</p>
            <p className="product-price">{ product.price } tng</p>
            <input type="text" name="quantity" className="quantity-input" value={props.productQuantity} 
                onChange={props.onChangeHandler} />
            <div className="add-action">
                <button type="button" className="add-to-cart-btn" onClick={props.addToCart.bind(this, product)}>ADD TO CART</button>
            </div>
        </div>
    );
}

export default Product;