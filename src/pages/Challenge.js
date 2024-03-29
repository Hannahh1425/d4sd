import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './style.css';

class Challenge extends Component {

  render() {
    return (
      <div>
        <Navbar/>

                  <div className="div-large"/>
                  <div className="text-block">
                      <h3>Challenge Briefs</h3>
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
                          <Link to='/'>
                              <div className="image d-flex align-items-center justify-content-center">
                                      <h3>CLIMATE</h3>
                              </div>
                          </Link>
                          </div>
                          <div className="col-lg-6">
                          <Link to='/'>
                              <div className="image d-flex align-items-center justify-content-center">
                                      <h3>CLIMATE</h3>
                              </div>
                          </Link>
                          </div>
                      </div>
                      <br className="div-small"/>
                      <div className="row">
                          <div className="col-lg-6">
                          <Link to='/'>
                              <div className="image d-flex align-items-center justify-content-center">
                                      <h3>CLIMATE</h3>
                              </div>
                          </Link>
                          </div>
                          <div className="col-lg-6">
                          <Link to='/'>
                              <div className="image d-flex align-items-center justify-content-center">
                                      <h3>CLIMATE</h3>
                              </div>
                          </Link>
                          </div>
                      </div>
                  </div>
                  <div className="div-endpage"/>
      </div>
    );
  }
}

export default Challenge;
