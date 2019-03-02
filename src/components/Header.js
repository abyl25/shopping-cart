import React, { Component } from 'react';
import Cart from './Cart';
import './header.css';

class Header extends Component {
    state = {
        title: ''
    };

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (                  
            <header> 
                <div className="container">
                    <div className="brand">
                        <h3>Shopping cart</h3>
                    </div>              
                    <div className="search">
                        <form action="#" className="search-form">
                            <input type="text" className="search-input" name="title" 
                            value={this.state.title} placeholder="Search"  
                            onChange={this.onChangeHandler}/>
                            <button type="submit" className="search-btn" onClick={this.handleSubmit} />
                        </form>
                    </div>
                    {/* <div className="cart"> */}
                        {/* <h3>Cart</h3> */}
                    {/* </div> */}
                    
                    <div className="cart">
                        <Cart cartProducts={this.props.cartProducts} removeFromCart={this.props.removeFromCart}/>
                    </div>
                </div>
            </header> 
        );
    }
}

export default Header;