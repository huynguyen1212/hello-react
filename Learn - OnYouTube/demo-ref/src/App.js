import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => this.inputElement.current.focus(), 2000);
    // this.inputElement.current.focus();
  }

  render() {
    return (
      <div className="App">
        <input tyte="text" ref={this.inputElement} />
      </div>
    );
  }
}

export default App;
