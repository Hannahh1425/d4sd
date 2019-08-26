import React, { Component } from 'react';
import '../style.css';
import designlab from '../../img/footer_ucsddesignlabimg.png';
import { OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox } from '../../assets/css/containers.js';
import { Bg, Background } from '../../assets/css/others.js';
import { H2, H5, H6 } from '../../assets/css/fonts.js';

class FooterCard extends Component {

  render() {
    return (
      <Bg blue ref={this.value} id="value">
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
              <a href="mailto:team@d4sd.org">
               team@d4sd.org
              </a>.</H6>
              <br/>
          </OuterContainer>
      </div>
      </Bg>
    );
  }
}

export default FooterCard;
