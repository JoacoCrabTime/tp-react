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

  render() {
    return (
      <div className="App">
        <Section />
        <Form />
        <List />
        <Section />
      </div>
    );
  }
}
