import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
// import Search from './components/Search';
import Products from './components/Products';
import './App.css';

class App extends Component {
  state = {
    products: [],
    cart: [],
    productQuantity: 1
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
      console.log('cart: '); console.log(this.state.cart);
    });
  }
  

  render() {
    return (
      <div className="App">
        <Header/>
        <Products products={this.state.products} productQuantity={this.state.productQuantity} 
          addToCart={this.handleAddToCart} />
      </div>
    );
  }
}

export default App;
