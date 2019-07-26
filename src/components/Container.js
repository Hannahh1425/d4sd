import React, {Component} from 'react';


class Container extends Component {

  render() {
    return (
        <div onClick={this.props.onClick} className={`container d-flex flex-column ${this.props.className}`} align="center">
            {this.props.children}
        </div>
    )
  }
}

export default Container;
