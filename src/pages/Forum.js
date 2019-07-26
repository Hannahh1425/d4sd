import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './style.css';

class Forum extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Forum</h1>
      </div>
    );
  }
}

export default Forum;
