import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './style.css';

class Challenge extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Challenge</h1>
      </div>
    );
  }
}

export default Challenge;
