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
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteAPI(index) {
    axios.delete(url+"/materias/"+index)
	  .then((resp) => {
		  console.log(resp);
		  console.log(index);
      this.getAPI();
	  })
	  .catch((error) => {
		  console.log(error);
    })
  }

  componentDidMount() {
    this.getAPI();
  }

  render() {
    const {mats} = this.state;
    return (
      <div className="App">
        <Section />
        <div className="contenedor">
          <Form getAPItoForm={() => this.getAPI()} postAPItoForm={(data) => this.postAPI(data)} />
          <List listInfo={mats} deleteAPItoList={(index) => this.deleteAPI(index)} />
        </div>
        <Section />
      </div>
    );
  }
}
