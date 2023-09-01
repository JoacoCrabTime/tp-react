import React from "react";
import Elim from "./Elim";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
        <div className="Card">
		    <Elim />
			<span>${cod}, ${mat}</span>
			<span>${doce}: ${hs} Horas Semanales</span>
			{/*<span>Calificaciones: ${notas}</span>
			<span>Promedio: ${promedio}</span>*/}
	    </div>
    );
  }
}