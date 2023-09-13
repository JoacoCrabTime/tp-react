import React from "react";
import Elim from "./Elim";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {nombre, codigo, docente, hsCatedras} = this.props.cardInfo;
    return(
      <div className="Card">
		    <Elim />
        <span>{codigo}, {nombre}</span>
			  <span>{docente}: {hsCatedras} Horas Semanales</span>
	    </div>
    );
  }
}