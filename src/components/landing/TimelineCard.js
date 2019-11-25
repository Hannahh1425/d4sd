import React, { Component } from 'react';
import { FAQBtn, SmallBtn } from '../../assets/css/buttons.js';
import { H4, H5 } from '../../assets/css/fonts.js';
import { Card, OuterFlexBox, InnerFlexBox } from '../../assets/css/containers.js';

class TimelineCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  getContentToggleHeight() {
    if (this.state.open) {
      return 'auto';
    }
    return '0';
  }

  toggleContent = () => {
    this.setState({
      open: !(this.state.open),
    });
  }

  render() {
    // const contentStyle = { height: this.getContentToggleHeight() };
    return (
      <div id={this.props.question}>
        <div>
            <FAQBtn onClick={this.toggleContent} style={{"width":"100%"}}>
              <Card theme={{paddingS: "10px", paddingM: "20px 10px", paddingL: "30px 50px 30px 30px"}} style={{"width":"100%"}}>
                <InnerFlexBox center>
                  <H4 left>{this.props.stage}</H4>
                  {!this.state.open && <H5>{this.props.first}</H5>}
                  {this.state.open ? <i className="fas fa-chevron-up" style={{"color":"rgba(0, 0, 0, 0.5)"}}></i>:<i className="fas fa-chevron-down" style={{"color":"rgba(0, 0, 0, 0.5)"}}></i>}
                </InnerFlexBox>
              <div className={!this.state.open ? "d-none":"d-block"}>
                <hr/>
                <H5
                  dangerouslySetInnerHTML={{
                    __html: this.props.detail,
                  }}
                />
              <br/>
              <OuterFlexBox>
                <SmallBtn isAction={this.props.isAction1} state={this.props.state1} href={this.props.link1} target="_blank">{this.props.action1}</SmallBtn>
                <SmallBtn isAction={this.props.isAction2} state={this.props.state2} href={this.props.link2} target="_blank">{this.props.action2}</SmallBtn>
                </OuterFlexBox>
              </div>
              </Card>
            </FAQBtn>
        </div>
      </div>
    );
  }
}

export default TimelineCard;
