import React, { Component } from 'react';
import '../style.css';
import designlab from '../../assets/img/footer_ucsddesignlabimg.png';
import { OuterContainer, OuterFlexBox } from '../../assets/css/containers.js';
import { FooterBg } from '../../assets/css/others.js';
import { H6, A } from '../../assets/css/fonts.js';

class FooterCard extends Component {

  render() {
    return (
      <FooterBg grey ref={this.value} id="value">
      <div id="footer-card" className="d-flex justify-content-center align-items-center">
          <OuterContainer center>
              <br/><br/><br/>
              <OuterFlexBox center>
                  <a href= "https://designlab.ucsd.edu/">
                    <img src={designlab} alt='UC San Diego Design Lab' className="rounded-lg"/>
                  </a>
              </OuterFlexBox>
              <br/><br/>
              <H6>Copyright © 2017-2019 D4SD. All Rights Reserved. Send feedback to<span>&nbsp;</span>
              <A href="mailto:team@d4sd.org">
               team@d4sd.org
              </A>.</H6>
              <br/>
          </OuterContainer>
      </div>
      </FooterBg>
    );
  }
}

export default FooterCard;
