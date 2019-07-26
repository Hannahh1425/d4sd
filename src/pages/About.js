import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/landing/Button';
import header from '../img/about.png';
import './style.css';

class Home extends Component {

  render() {
    return (
      <div id="about">
        <Navbar/>
        <img src={header} alt="header" className="w-100"/>
        <div className="container">
          <br/><br/>
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-10">
              <h3>What is D4SD</h3>
              <h6>
                Design for San Diego (D4SD) is a civic design competition that brings
                together innovators, designers, mentors and experts from the region
                to address San Diego’s most challenging issues through human-centered
                design. Our aim is to provide a space that allows for the community
                to engage the issues, prototype solutions to the problems they see,
                and link them to resources in their communities that can bring those
                solutions to life. This is the 2nd D4SD Civic Design Challenge and the
                theme of this year is Sustainable City. To make cities and human
                settlements inclusive, safe, resilient and sustainable is one of the
                17 goals that the United Nations envisioned to transform our world by
                2030. What can we do to make San Diego a more sustainable city to
                settle in? Check out the challenge briefs to see the problem space
                that you could explore and sign up to be part of this innovative
                process for the city’s future!
              </h6>
              <br/>
              <div className="row">
                <div className="col-lg-3">
                  <Button page="CHALLENGE BREIF" to="/"/>
                </div>
                <div className="col-lg-3">
                  <Button page="GET INVOLVE" to="/"/>
                </div>
              </div>
            </div>
            <div className="col"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
