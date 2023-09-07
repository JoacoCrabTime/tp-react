import React from "react";

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, color, func} = this.props;
    return (
      <span
        className="Btn"
        style={{ backgroundColor: color }}
        onClick={() => func()}
      >
        {title}
      </span>
    );
  }
}
