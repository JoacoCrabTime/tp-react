import React from "react";

export default class Elim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  delCard() {
    alert("Borrado");
  }
  
  render() {
    return (
        <div className="Elim" onClick={() => this.delCard()}>X</div>
    );
  }
}