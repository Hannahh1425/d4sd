import React, {Component} from 'react';


class Container extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"/>
          <div className="col-lg-10">
            {this.props.children}
          </div>
          <div className="col"/>
        </div>
      </div>
    )
  }
}

export default Container;
