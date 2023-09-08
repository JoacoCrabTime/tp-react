import React from "react";
import Form from "./Comps/Form";
import Section from "./Comps/Section";
import List from "./Comps/List";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://hd6v8q-3000.csb.app/api",
      formData: {
        cod: "test",
        mat: "test",
        doce: "test",
        hs: "test"
      }
    };
  }
  
  getAPI() {
    const {url} = this.state;

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

  postAPI(mat, cod, doce, hs) {
    const {url} = this.state;
    const body = {codigo: cod, nombre: mat, 
      docente: doce, hsCatedras: hs};
  
    axios.post(url+"/materias/", body)
    .then((resp) => {
      console.log(resp);
      console.log(body);
      {/*readAPI(); Actualiza cartas
      materias.push(matsAPI); Push de API a Array (del TP4)
      escribir(materias); Crear cartas en HTML (del TP4)
      console.log(materias);*/}
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <Section />
        <div className="contenedor">
          <Form getAPItoForm={() => this.getAPI()} postAPItoForm={() => this.postAPI()} />
          <List />
        </div>
        <Section />
      </div>
    );
  }
}
