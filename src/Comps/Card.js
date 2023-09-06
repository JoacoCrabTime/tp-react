import React from "react";
import Elim from "./Elim";

export default class Card extends React.Component {
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
    const {mat, cod, doce, hs} = this.props;
    return(
      <div className="Card">
		    <Elim />
        <span>{cod}, {mat}</span>
			  <span>{doce}: {hs} Horas Semanales</span>
	    </div>
    );
  }
}