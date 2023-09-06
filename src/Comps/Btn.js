import React from "react";

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, color, onClick} = this.props;
    return (
      <span
        className="Btn"
        style={{ backgroundColor: color }}
        onClick={() => onClick()}
      >
        {title}
      </span>
    );
  }
}
