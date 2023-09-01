import React from "react";
import Form from "./Comps/Form";
import Section from "./Comps/Section";
import List from "./Comps/List";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materias: [1,2,3,4]
    };
  }

  render() {
    return (
      <div className="App">
        <Section />
        <div className="contenedor">
          <Form />
          <List materias={this.state.materias} />
        </div>
        <Section />
      </div>
    );
  }
}
