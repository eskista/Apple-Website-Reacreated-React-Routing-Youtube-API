import React, { Component } from "react";
import "../../Common/css/styles.css";

class Navlinks extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.linkURL}>
          {this.props.linkName}
        </a>
      </li>
    );
  }
}

export default Navlinks;
