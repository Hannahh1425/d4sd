import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import HeaderCard from '../components/landing/HeaderCard';
import Button from '../components/landing/Button';
import RoleCard from '../components/landing/RoleCard';
import Mailchimp from 'react-mailchimp-form';
import playbook_educator from "../img/involve_playbook.pdf";
import educator from "../img/involve_educator.png";
import sponsor from "../img/involve_sponsor.png";
import expert from "../img/involve_expert.png";
import innovator from "../img/involve_participant.png";
import question from "../img/involve_question.svg";

import icon from '../img/icon.png';

import playbook1 from '../img/involve_playbook.pdf';

import './style.css';

const content = [
  {
    title: "Start innovating!",
    txt: "As an innovator, you can participate in a variety of in-person events and create innovative solutions in a team. D4SD gives innovators the opportunity to unpack large problems, develop solutions, learn about human-centered design, showcase their ideas, and network with the larger design community.",
    image: innovator,
    id: "innovators",
    link: "http://eepurl.com/c2kFon",
    action: ""
  },
  {
    title: "Offer your expertise",
    txt: "D4SD requires the collective effort of people with a variety of backgrounds. There are other dimensions to the challenge which needs additional support. So we encourage all of those who resonate with your cause to reach out and learn about the different ways you can get involved.",
    image: expert,
    id: "experts",
    link: "http://eepurl.com/c2kFon",
    action: ""
  },
  {
    title: "Teach your class with D4SD",
    txt: "D4SD offers a curriculum to help educators use the challenge as a teaching opportunity. Students get experience working on big civic problems using the human-centered design process. This scaffolded learning process is designed to support all skill levels and backgrounds. The topics are also designed to be applicable in many class formats to address a variety of intended learning outcomes.",
    image: educator,
    id: "educators",
    link: playbook_educator,
    action: ""
  },
  {
    title: "Sponsor D4SD",
    txt: "D4SD provides a stage to share the problems and topics you care about. You can tap into a network of innovators to solve problems that matter to you. There are also many opportunities to interact with the broader San Diego community to get further support and traction for the developed solutions.",
    image: sponsor,
    id: "sponsors",
    link: "http://eepurl.com/c2kFon",
    action: ""
  },
  {
    title: "There are infinite ways to get involved",
    txt: "We’ve imagined a number of ways to get involved, but we’re all about innovation so don’t feel limited! If you want to be involved in a way that isn’t listed above, we hope you will design your own role and join the action! We look forward to innovating with you and leveraging your unique talents and perspective!",
    image: question,
    id: "question",
    link: "https://forms.gle/1GzRdAVandg68rTP9",
    action: "Make your Suggestion"
  }
]

class Involve extends Component {
  constructor() {
    super();
    this.state = ({
      hovered: "",
      show: []
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

  expand = ref => {
    let target = ref.current.props.id;
    if (!this.state.show.includes(target)) (
      this.setState({show: [...this.state.show, target]})
    )
    else {
      this.setState({show: this.state.show.filter(show => {
          return show !== target
      })});
    }
  }

  render() {
    return (
      <div id="involve">
        <Navbar/>
        <br/><br/>
        <HeaderCard title="Get Involved"/>
          <br/><br/>
          <Container>
          <div className="text-center">
            <h4>If you're interested in being part of D4SD, Join our Mailing List</h4>
            <br/>
            <a href="http://eepurl.com/c2kFon" className="btn-style-big" target="_blank">Join our Mailing List</a>
          </div>
          <br/><br/><br/><br/>
          <div className="d-flex flex-wrap justify-content-between">
          {content.map(content => (
            <div className="col-xs-6 col-md-6 mb-4">
              <RoleCard
                onClick={() => this.expand(this[content.id])}
                ref={this[content.id]}
                id={content.id}
                show = {this.state.show}
                title={content.title}
                txt={content.txt}
                image={content.image}
                link={content.link}
                action={content.action}
              />
            </div>
          ))}
        </div>
        </Container>
      </div>
    );
  }
}

export default Involve;
