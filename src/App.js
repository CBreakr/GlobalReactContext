import React from 'react';
import './App.css';

import Parent from "./Parent";

import MainContext from "./MainContext"

export default class App extends React.Component {

  state = {
    valOne: "20",
    valTwo: "100",
    editMe: "default"
  }

  randomize = () => {
    this.setState({
      valOne: Math.floor(Math.random()*100),
      valTwo: Math.floor(Math.random()*100)
    });
  }

  render(){
    return (
      <div className="App">
        <MainContext.Provider value={{...this.state, update: this.setState.bind(this)}}>
          <div>Edit Value: {this.state.editMe}</div>
          <button  onClick={this.randomize}>Set Random</button>
          <Parent />
        </MainContext.Provider>
      </div>
    );
  }
}

