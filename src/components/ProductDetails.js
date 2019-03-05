import React, { useState, useEffect } from 'react';

const ProductDetails = (props) => {
    // const [product, setProduct] = useState({});
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const productId = props.match.params.id;

    useEffect(() => {
        const prod = props.getProductById(productId);
        if (prod) {
            // setProduct(prod);
            setProductName(prod.name);
            setProductPrice(prod.price);
            setProductImage(prod.image);
        }
        // console.log('product (details.js): ');
        // console.log(product);
    });

    return (
        <div className="product-details">
            <p>id: { productId }</p>
            <p>name: { productName }</p>
            <p>price: { productPrice }</p>
            <img src={ productImage } alt="" width="200" height="200" />
        </div>
    );
}

export default ProductDetails;