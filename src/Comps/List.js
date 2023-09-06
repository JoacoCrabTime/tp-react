import React from "react";
import Card from "./Card";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /*const {???} = this.props;*/
    return (
      <div className="List">
        <Card /> {/*temp*/}
      </div>
    );
  }
}