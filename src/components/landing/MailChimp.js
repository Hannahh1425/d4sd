import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class Mailchimp extends Component {
  constructor(props) {
    super(props);
    let stringEmail = JSON.stringify(this.props.location.state.email);
    let email = JSON.parse(stringEmail);
    this.state = {
      use_type: "",
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value});
  };
  render() {
    return (
      <div className="page-section container bg-primary" id="mailchimp">
    		<div id="mc_embed_signup" className="bg-primary">
    			<div className="row">
    				<div className="col-md-6 col-lg-6">
    					<form action="https://d4sd.us16.list-manage.com/subscribe/post?u=91266a108ebc6bb9366fb0818&amp;id=9c8fb40522" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
    					  <div id="mc_embed_signup_scroll">
    							<div className="row">
    								<h2>Stay in Touch with Us</h2>
    								<p>Sign up for our mailing list to stay informed and join us in 2020 to learn all the details on
    									how
    									you
    									can
    									participate.</p>
    							</div>
    							<br />
    							<div className="row">
    								<div className="col-6">
    									<div className="mc-field-group">
    								    <label for="mce-FNAME">First Name  <span className="asterisk">*</span></label>
    								    <input
                          type="text"
                          onChange={this.onChange}
                          value={this.state.fname}
                          name="FNAME"
                          className="required"
                          id="mce-FNAME"
                        />
    									</div>
    								</div>
    								<div className="col-6">
    									<div className="mc-field-group">
    								    <label for="mce-LNAME">Last Name  <span className="asterisk">*</span></label>
    								    <input type="text" value="" name="LNAME" className="required" id="mce-LNAME">
    									</div>
    								</div>
    							</div>
    							<div className="row">
    								<div className="mc-field-group">
    								  <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
    								  <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL">
    								</div>
    							</div>
    							<div className="row">
    								<div className="mc-field-group">
    							    <label for="mce-MMERGE3">Company or organization  <span className="asterisk">*</span></label>
    							    <input type="text" value="" name="MMERGE3" className="required" id="mce-MMERGE3">
    								</div>
    							</div>
    							<!-- <div className="row">
    								<div className="mc-field-group">
    							    <label for="mce-MMERGE5">Message </label>
    							    <input type="text" value="" name="MMERGE5" className="" id="mce-MMERGE5">
    								</div>
    							</div> -->
    							<div className="row">
    								<div className="mc-field-group input-group">
    								  <strong>How would you like to get involved with D4SD? </strong>
    								  <ul>
    										<li><input type="checkbox" value="1" name="group[1805][1]" id="mce-group[1805]-1805-0"><label for="mce-group[1805]-1805-0">Attend events (e.g. design sprints, hackathons, idea showcase, awards ceremony)</label></li>
    										<li><input type="checkbox" value="2" name="group[1805][2]" id="mce-group[1805]-1805-1"><label for="mce-group[1805]-1805-1">Engage discussions on our D4SD forum</label></li>
    										<li><input type="checkbox" value="4" name="group[1805][4]" id="mce-group[1805]-1805-2"><label for="mce-group[1805]-1805-2">Join D4SD as a challenge participant</label></li>
    										<li><input type="checkbox" value="8" name="group[1805][8]" id="mce-group[1805]-1805-3"><label for="mce-group[1805]-1805-3">Mentor student teams</label></li>
    										<li><input type="checkbox" value="16" name="group[1805][16]" id="mce-group[1805]-1805-4"><label for="mce-group[1805]-1805-4">Provide feedback to design teams</label></li>
    										<li><input type="checkbox" value="32" name="group[1805][32]" id="mce-group[1805]-1805-5"><label for="mce-group[1805]-1805-5">Write a blog article on a topic</label></li>
    									</ul>
    								</div>
    							</div>
    					    <div id="mce-responses" className="clear">
    					      <div className="response" id="mce-error-response" style="display:none"></div>
    					      <div className="response" id="mce-success-response" style="display:none"></div>
    					    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    				    	<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_91266a108ebc6bb9366fb0818_9c8fb40522" tabindex="-1" value=""></div>
    				    	<div className="clear row">
    								<input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="button">
    							</div>
    				  	</div>
    					</form>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default Mailchimp;
