import React, {Component} from 'react';


class Container extends Component {

  render() {
    return (
      <div style={this.props.style}>
      <div className="container mb-5">
        <div className="row">
          <div className="col"/>
          <div className="col-lg-10">
            {this.props.children}
          </div>
          <div className="col"/>
        </div>
      </div>
    </div>
    )
  }
}

export default Container;
