import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      array: [
        'spaghetti',
        'ice cream',
        'sushi',
        'bologna',
        'cheese'
      ]
    }
  }
  render() {

    let arrayDisplay = this.state.array.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })

    
    
    return (
      <div className="App">
      {arrayDisplay}
        
      </div>
    );
  }
}

export default App;
