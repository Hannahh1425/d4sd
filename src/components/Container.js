import React, {Component} from 'react';

class Container extends Component {

  render() {
    return (
      <div>
        <div className="container mb-5">
          <div className="row">
            <div className="col"/>
            <div className="col-lg-11">
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
