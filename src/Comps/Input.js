import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, value, onChange} = this.props;
    return (
      <label>
        {title}
        <input
          placeholder={title}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    );
  }
}
