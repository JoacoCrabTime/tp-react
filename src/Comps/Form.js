import React from "react";
import Input from "./Input";
import Btn from "./Btn";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Form">
        <Input title="Materia" />
        <Input title="Código" />
        <Input title="Docente" />
        <Input title="Horas Semanales" />
        Calificaciones:
        <Btn title="Agregar Calificación" color="#d0ac40" />
        <Btn title="Guardar" color="#99d938" />
      </div>
    );
  }
}
