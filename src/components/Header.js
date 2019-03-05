import React from 'react';
import Cart from './Cart';
import './header.css';

const Header = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (                  
        <header> 
            <div className="container">
                <div className="brand">
                    <h3>Shopping cart</h3>
                </div>              
                <div className="search">
                    <form action="#" className="search-form" autoComplete="off">
                        <input type="text" className="search-input" name="searchName" placeholder="Search"
                            value={props.searchName} onChange={props.onChangeHandler} />
                        <button type="submit" className="search-btn" onClick={handleSubmit} />
                    </form>
                </div>              
                <div className="cart">
                    <Cart cartProducts={props.cartProducts} showCart={props.showCart} removeFromCart={props.removeFromCart}
                      toggleShowCart={props.toggleShowCart} />
                </div>
            </div>
        </header> 
    );
}

export default Header;