import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './style.css';

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <h1>About</h1>
      </div>
    );
  }
}

export default Home;
