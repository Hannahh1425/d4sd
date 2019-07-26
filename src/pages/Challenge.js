import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ClimateImage from '../img/lajollacove.png';
import './style.css';

class Challenge extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
        <div className="row">
        <div className="col"/>
            <div className="col-lg-10">
                  <div className="div-large"/>
                  <div className="text-block">
                      <h1>Challenge Briefs</h1>
                      <h6>The challenges below explore the concerns currently facing San
                      Diegans while also looking towards the future of transportation.
                      Join a conversation about the issue that concerns you most and find
                      teammates to submit a proposal. In addition to the Grand Prize, at the
                      Design Forward Alliance we will award prizes for the best prototype in
                      each of the four challenge categories.</h6>
                  </div>
                  <div className="div-small"/>
                  <div className="image-grid">
                      <div className="row">
                          <div className="col-lg-6">
                              <img src={ClimateImage} className="w-100 h-100 img-fluid"></img>
                          </div>
                          <div className="col-lg-6">
                              <img src={ClimateImage} className="w-100 h-100 img-fluid"></img>
                          </div>
                      </div>
                      <br className="div-small"/>
                      <div className="row">
                          <div className="col-lg-6">
                              <img src={ClimateImage} className="w-100 h-100 img-fluid"></img>
                          </div>
                          <div className="col-lg-6">
                              <img src={ClimateImage} className="w-100 h-100 img-fluid"></img>
                          </div>
                      </div>
                  </div>
                  <div className="div-endpage"/>
            </div>
        <div className="col"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Challenge;
