import React from "react";
import Input from "./Input";
import Btn from "./Btn";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      codigo: "",
      docente: "",
      hsCatedras: ""
    };
  }

  postCard() {
    const {nombre, codigo, docente, hsCatedras} = this.state;
    const data = {codigo, nombre, docente, hsCatedras};
    this.props.postAPItoForm(data);
  }

  render() {
    const {nombre, codigo, docente, hsCatedras} = this.state;
    return (
      <div className="Form">
        <Input title="Materia" value={nombre} onChange={(value) => this.setState({nombre: value})} />
        <Input title="Código" value={codigo} onChange={(value) => this.setState({codigo: value})} />
        <Input title="Docente" value={docente} onChange={(value) => this.setState({docente: value})} />
        <Input title="Horas Semanales" value={hsCatedras} onChange={(value) => this.setState({hsCatedras: value})} />
        <Btn title="Guardar" color="#99d938" func={() => this.postCard()} />
        <Btn title="getTest" func={() => this.props.getAPItoForm()} />
      </div>
    );
  }
}
