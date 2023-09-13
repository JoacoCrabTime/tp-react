import React from "react";
import Form from "./Comps/Form";
import Section from "./Comps/Section";
import List from "./Comps/List";
import "./styles.css";
const url= "https://hd6v8q-3000.csb.app/api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mats: []
    };
  }
  
  getAPI() {
    axios.get(url+"/materias/")
    .then((resp) => {
        console.log("Consulta realizada");
        this.setState({mats: resp.data.materias});
        console.log(resp.data);
    })
    .catch((error) => {
        console.log("Consulta rechazada");
        console.log(error);
    });
  }

  postAPI(data) {
    axios.post(url+"/materias/", data)
    .then((resp) => {
      console.log(resp);
      console.log(data);
      this.getAPI();
      {/*escribir(materias); Creaba cartas en HTML (del TP4)*/}
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const {mats} = this.state;
    return (
      <div className="App">
        <Section />
        <div className="contenedor">
          <Form getAPItoForm={() => this.getAPI()} postAPItoForm={(data) => this.postAPI(data)} />
          <List listInfo={mats} />
        </div>
        <Section />
      </div>
    );
  }
}
