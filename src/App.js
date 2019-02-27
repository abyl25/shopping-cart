import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Products from './components/Products';
import './App.css';

class App extends Component {
  state = {
    products: []
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

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Search/>
        <Products products={this.state.products}/>
      </div>
    );
  }
}

export default App;
