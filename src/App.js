import React from "react";
import Form from "./Comps/Form";
import Section from "./Comps/Section";
import List from "./Comps/List";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
/*
  getAPI() {
    const url = "https://hd6v8q-3000.csb.app/api";

    axios.get(url+"/materias/")
    .then((resp) => {
        console.log("Consulta realizada");
        console.log(resp.data);
    })
    .catch((error) => {
        console.log("Consulta rechazada");
        console.log(error);
    });
  }
*/
  render() {
    return (
      <div className="App">
        <Section />
        <div className="contenedor">
          <Form />
          <List />
        </div>
        <Section />
        {/*<span onClick={this.getAPI()}>*/}
      </div>
    );
  }
}
