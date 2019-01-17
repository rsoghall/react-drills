import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      textBox: ''
    }
  }
  handleChange(value){
    this.setState({textBox: value})
  }
 
  
  
  render() {
    return (
      <div className="App"> 
      <input onChange={(e) => this.handleChange(e.target.value)} type='text'/>
      <p>{this.state.textBox}</p>  
        
      </div>
    );
  }
}

export default App;
