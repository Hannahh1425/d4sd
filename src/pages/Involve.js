import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Button from '../components/landing/Button';
import RoleCard from '../components/landing/RoleCard';
import Mailchimp from 'react-mailchimp-form';
import HeaderCard from '../components/landing/HeaderCard';
import playbook_educator from "../img/involve_playbook.pdf";
import educator from "../img/about_educator.png";
import sponsor from "../img/about_sponsor.png";
import expert from "../img/about_expert.png";
import innovator from "../img/about_participants.png";

import icon from '../img/icon.png';

import playbook1 from '../img/involve_playbook.pdf';

import './style.css';

// const content = [
//   {
//     title: "Take part in the challenge",
//     txt1: "Participate in a variety of in-person events and create innovative solutions in a team",
//     icon1: icon,
//     image: participants,
//     playbook: playbook1
//   },
//   {
//     title: "Offer your expertise",
//     icon1: icon,
//     icon2: icon,
//     icon3: icon,
//     icon4: icon,
//     txt1: "Provide Feedback to the innovative teams",
//     txt2: "Mentor our teams",
//     txt3: "Judge the work",
//     txt4: "Provide expertise and resources",
//     image: expert,
//     playbook: playbook1
//   },
//   {
//     title: "Integrate D4SD into your educational offering",
//     icon1: icon,
//     icon2: icon,
//     txt1: "Offer experiential learning opportunities to your students",
//     txt2: "Implement a civic innovation class in your institution",
//     image: educator,
//     playbook: playbook1
//   },
//   {
//     title: "Sponsor us",
//     icon1: icon,
//     icon2: icon,
//     icon3: icon,
//     txt1: "Provide funding and resources for the challenge",
//     txt2: "Increase your brand awareness through D4SD events",
//     txt3: "Explore business opportunities within the larger challenge",
//     image: sponsor,
//     playbook: playbook1
//   }
// ]


const roles = [
  {
    name: innovator,
    txt: "Take part in the challenge",
    id: "innovators"
  },
  {
    name: expert,
    txt: "Offer your expertise",
    id: "experts"
  },
  {
    name: educator,
    txt: "Bring D4SD to your class",
    id: "educators"
  },
  {
    name: sponsor,
    txt: "Bring awareness to your business",
    id: "sponsors"
  },
]

class Involve extends Component {
  constructor() {
    super();
    this.state = ({
      innovators: false,
      experts: false,
      educators: false,
      sponsors: false,
    })
    this.innovators = React.createRef();
    this.experts = React.createRef();
    this.educators = React.createRef();
    this.sponsors = React.createRef();
  }

  onHover = ref => {
    let states = ["innovators", "experts", "educators", "sponsors"];
    states.forEach(state => {
      if (state === ref.current.id) {
        this.setState({[ref.current.id]: true});
      }
      else {
        this.setState({[state]: false});
      }
    })
  }

  onLeave = ref => {
    let states = ["innovators", "experts", "educators", "sponsors"];
    states.forEach(state => {
      if (state === ref.current.id) {
        this.setState({[ref.current.id]: false});
      }
    })
  }


  render() {
    return (
      <div id="involve">
        <Navbar/>
          <br/><br/>
          <HeaderCard title="Ready to get involved?"/>
          <br/><br/>
          {/*<h2 className="text-center">Ready to get involved?</h2>
          <br/><br/>*/}
          <Container>
            <div className="row text-center">
              {roles.map(role => (
                <div
                  className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 involve-roles"
                  id={role.id}
                  ref={this[role.id]}
                  onMouseOver={() => this.onHover(this[role.id])}
                  onMouseOut={() => this.onLeave(this[role.id])}
                >
                  <h5 className={this.state[role.id] ? "involve-action":"d-none"}>Sign up for the mailing list!</h5>
                  <a href={playbook_educator}>
                    <img src={role.name} className={this.state[role.id] ? "involve-action-img":""}/>
                    <h5>{role.txt}</h5>
                  </a>
                  <br/><br/><br/><br/>
                </div>
              ))}
            </div>
          </Container>
          {/**<div style={{"width":"90%", "marginLeft":"5%"}}>
          <div className="d-flex flex-wrap justify-content-around">
          {/content.map(content => (
            <div className="col-xs-3 col-md-3">
              <RoleCard
                title={content.title}
                txt1={content.txt1}
                txt2={content.txt2}
                txt3={content.txt3}
                txt4={content.txt4}
                image={content.image}
                playbook={content.playbook}
              />
            </div>
          ))}
        </div>
        </div>**/}
      </div>
    );
  }
}

export default Involve;
