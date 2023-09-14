import React from "react";
import Card from "./Card";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const materia = this.props.listInfo;
    return (
      <div className="List">
        {materia.map((mat, index) => {
	        return(
		        <Card key={index} cardInfo={mat} deleteAPItoCard={(index) => this.props.deleteAPItoList(index)} />
	        )
        })}
      </div>
    );
  }
}