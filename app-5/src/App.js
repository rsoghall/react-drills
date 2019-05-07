import React, { Component } from 'react';
import './App.css';
import Image from './Image' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/julia-roberts-transformation-1-1543325921.jpg"}/> 
      </div>
    );
  }
}

export default App;
