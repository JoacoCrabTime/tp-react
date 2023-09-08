import React from "react";
import Input from "./Input";
import Btn from "./Btn";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mat: "",
      cod: "",
      doce: "",
      hs: ""
    };
  }

  postCard() {
    const {mat, cod, doce, hs} = this.state;
    alert(`${mat}, ${cod}, ${doce}, ${hs}`);
    this.props.postAPItoForm(mat, cod, doce, hs);
  }

  render() {
    const {mat, cod, doce, hs} = this.state;
    return (
      <div className="Form">
        <Input title="Materia" value={mat} onChange={(value) => this.setState({mat: value})} />
        <Input title="Código" value={cod} onChange={(value) => this.setState({cod: value})} />
        <Input title="Docente" value={doce} onChange={(value) => this.setState({doce: value})} />
        <Input title="Horas Semanales" value={hs} onChange={(value) => this.setState({hs: value})} />
        Calificaciones:
        <Btn title="Agregar Calificación" color="#d0ac40" />
        <Btn title="Guardar" color="#99d938" func={() => this.postCard()} />
        <Btn title="getTest" func={() => this.props.getAPItoForm()} />
      </div>
    );
  }
}
