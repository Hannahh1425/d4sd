import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Button from '../components/landing/Button';
import RoleCard from '../components/landing/RoleCard';
import Mailchimp from 'react-mailchimp-form';
import playbook_educator from "../img/involve_playbook.pdf";
import educator from "../img/involve_educator.png";
import sponsor from "../img/involve_sponsor.png";
import expert from "../img/involve_expert.png";
import innovator from "../img/involve_participant.png";

import icon from '../img/icon.png';

import playbook1 from '../img/involve_playbook.pdf';

import './style.css';

const content = [
  {
    title: "Take part in the challenge",
    txt: "Participate in a variety of in-person events and create innovative solutions in a team. D4SD gives innovators the opportunity to unpack large problems, generate potential solutions, learn human-centered design, showcase their ideas, and network with the larger design community.",
    image: innovator,
    id: "innovators",
    link: "http://eepurl.com/c2kFon"
  },
  {
    title: "Offer your expertise",
    txt: "D4SD requires the collective effort of people with a variety of backgrounds. There are other dimensions to the challenge which needs additional support. So we encourage all of those who resonate with your cause to reach out and learn about the different ways you can get involved.",
    image: innovator,
    id: "experts",
    link: "http://eepurl.com/c2kFon"
  },
  {
    title: "Bring D4SD to your class",
    txt: "Offer experiential learning opportunities to your students/ Implement a civic innovation class in your institution. D4SD provides a unique supplemental learning experience participants regardless of their exposure to design thinking. The program builds from first principles and guides students along the human-centered design process.",
    image: innovator,
    id: "educators",
    link: "http://eepurl.com/c2kFon"
  },
  {
    title: "Sponsor D4SD",
    txt: "D4SD has the ability to open your business to a wider network, particularly, the community and continue to foster and develop existing relationships.",
    image: innovator,
    id: "sponsors",
    link: "http://eepurl.com/c2kFon"
  }
]

class Involve extends Component {
  constructor() {
    super();
    this.state = ({
      hovered: ""
    })
    this.innovators = React.createRef();
    this.experts = React.createRef();
    this.educators = React.createRef();
    this.sponsors = React.createRef();
  }

  onHover = ref => {
    this.setState({hovered: ref.current.props.id});
    console.log("clalllll");
    console.log(ref.current.props.id);
  }

  onLeave = ref => {
    this.setState({hovered: "removed"});
    console.log("noo")
  }


  render() {
    return (
      <div id="involve">
        <Navbar/>
          <br/><br/><br/><br/>
          <h2 className="text-center">Ready to get involve?</h2>
          <br/><br/>
          {/**<Container>
            <div className="row text-center">
              {roles.map(role => (
                <div
                  className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 involve-roles"
                  id={role.id}
                  ref={this[role.id]}
                  onMouseOver={() => this.onHover(this[role.id])}
                  onMouseOut={() => this.onLeave(this[role.id])}
                >
                  <h5 className={this.state[role.id] ? "involve-action":"d-none"}>Sign up for mailing list!</h5>
                  <a href={role.link} target="_blank">
                    <img src={role.name} className={this.state[role.id] ? "involve-action-img":""}/>
                    <h5 className="mb-0">{role.txt}</h5>
                  </a>
                </div>
              ))}
            </div>
          </Container>**/}
          <Container>
          <div>
          <div className="d-flex flex-wrap justify-content-around">
          {content.map(content => (
            <div className="col-xs-6 col-md-6">
              <RoleCard
                onMouseOver={() => this.onHover(this[content.id])}
                onMouseOut={() => this.onLeave(this[content.id])}
                ref={this[content.id]}
                id={content.id}
                hovered = {this.state.hovered}
                title={content.title}
                txt={content.txt}
                image={content.image}
                link={content.link}
              />
            </div>
          ))}
        </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default Involve;
