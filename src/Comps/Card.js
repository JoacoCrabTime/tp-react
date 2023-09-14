import React from "react";
import Elim from "./Elim";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  delCard() {
    const {key} = this.props;
    console.log("delCard", this.props);
    this.props.deleteAPItoCard(key);
  }

  render() {
    const {nombre, codigo, docente, hsCatedras} = this.props.cardInfo;
    return(
      <div className="Card">
		    <Elim delFunc={() => this.delCard()} />
        <span>{codigo}, {nombre}</span>
			  <span>{docente}: {hsCatedras} Horas Semanales</span>
	    </div>
    );
  }
}