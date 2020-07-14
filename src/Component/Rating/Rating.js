import React, { Component } from "react";
import "../../Common/css/styles.css";

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  increment = () => {
    this.setState((state) => {
      return {
        value: state.value + 1,
      };
    });
  };

  decrement = () => {
    this.setState((state) => {
      return {
        value: state.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="rating-wrapper">
        <h2>Rating block</h2>
        <button className="positive" onClick={this.increment}>
          Increment
        </button>
        <button className="negative" onClick={this.decrement}>
          Decrement
        </button>
        <div className="rating-result">
          Your rated this product : {this.state.value}
        </div>
      </div>
    );
  }
}

export default Rating;
