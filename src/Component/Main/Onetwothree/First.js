import React, { Component } from "react";
import "../../../Common/css/styles.css";
import Commonprop from "./Commonprop";

class First extends Component {
  render() {
    return (
      <section className="first-hightlight-wrapper">
        <Commonprop alertType="New" equipmentName="iPad Pro" />
      </section>
    );
  }
}

export default First;
