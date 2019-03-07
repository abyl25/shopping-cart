import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext }  from './Session';
import Cart from './Cart';
import SignOutButton from './SignOut';
import './header.css';

const Header = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const NavigationAuth = (
        <React.Fragment>
            <li><Link to="/home">Home</Link></li>
            <SignOutButton />
        </React.Fragment>
    );

    const NavigationNonAuth = (
        <React.Fragment>
            <Link to="/signin">Sign in</Link>
        </React.Fragment>   
    );

    return (                  
        <header> 
            <div className="container">
                <div className="brand">
                    <Link id="logo" to="/" >Shopping cart</Link>
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

                <AuthUserContext.Consumer>
                    { authUser => authUser ? NavigationAuth : NavigationNonAuth }
                </AuthUserContext.Consumer>
            </div>
        </header> 
    );
}

export default Header;