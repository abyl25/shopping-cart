import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import axios from 'axios';
import Header from './components/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
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
      this.setState({ products: res.data });
    })
  }

  handleAddToCart = (product) => {
    this.setState((state) => {
      return { cart: [...state.cart, product] };
    });
  }
  
  handleRemoveFromCart = (id) => {
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

  getProductById = (id) => {
    return this.state.products.find(product => product.id == id); // eslint-disable-line
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header cartProducts={this.state.cart} showCart={this.state.showCart} searchName={this.state.searchName} 
            removeFromCart={this.handleRemoveFromCart} onChangeHandler={this.onChangeHandler} 
            toggleShowCart={this.toggleShowCart} />
          <Route exact path="/" render={(props) => <Products {...props} products={this.state.products} productQuantity={this.state.productQuantity}
            searchName={this.state.searchName} addToCart={this.handleAddToCart} onChangeHandler={this.onChangeHandler} />} />
          <Route exact path="/product/:id" render={(props) => 
            <ProductDetails {...props} getProductById={this.getProductById} />
          }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
