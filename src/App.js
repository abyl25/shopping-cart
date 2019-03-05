import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Products from './components/Products';
import './App.css';

class App extends Component {
  state = {
    products: [],
    cart: [],
    showCart: false,
    productQuantity: 1,
    searchName: '',
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const productsUrl = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';
    axios.get(productsUrl).then(res => {
      this.setState({
        products: res.data
      });
    })
  }

  handleAddToCart = (product) => {
    // console.log('added product(app.js): ' + JSON.stringify(product) );
    this.setState((state) => {
      return { cart: [...state.cart, product] };
    }, () => {
      // console.log('cart: '); console.log(this.state.cart);
    });
  }
  
  handleRemoveFromCart = (id) => {
    console.log('removed product(app.js): ' + id);
    this.setState((state) => {
      return { cart: state.cart.filter(item => item.id !== id)};
    });
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleShowCart = () => {
    this.setState((state) => ({ showCart: !state.showCart }));
  }

  render() {
    return (
      <div className="App">
        <Header cartProducts={this.state.cart} showCart={this.state.showCart} searchName={this.state.searchName} 
          removeFromCart={this.handleRemoveFromCart} onChangeHandler={this.onChangeHandler} 
          toggleShowCart={this.toggleShowCart} />
        <Products products={this.state.products} productQuantity={this.state.productQuantity} 
          searchName={this.state.searchName} addToCart={this.handleAddToCart} onChangeHandler={this.onChangeHandler} />
      </div>
    );
  }
}

export default App;
