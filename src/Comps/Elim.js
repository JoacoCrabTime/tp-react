import React from "react";

export default class Elim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {delFunc} = this.props;
    return (
        <div className="Elim" onClick={() => delFunc()}>X</div>
    );
  }
}