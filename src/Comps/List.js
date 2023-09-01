import React from "react";
import Card from "./Card";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mat: "",
      cod: "",
      doce: "",
      hs: ""
    };
  }

  render() {
    const {materias, mat, cod, doce, hs} = this.props;
    return (
      <div className="List">
        {materias.map((mat, index) => {
          return(
            <Card />
          )
        })}
      </div>
    );
  }
}