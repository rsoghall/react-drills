import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state= {
      filterString: '',
      array: [
        'bacon',
        'chocolate',
        'cake',
        'spaghetti',
        'ice cream',
        'sushi',
        'bologna',
        'cheese'
      ]
    }
  }
  handleChange(filter){
    this.setState({filterString: filter})
  }
  
  render() {
    let arrayDisplay = this.state.array.filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    
    return (
      <div className="App">
      <input onChange = {(e) => this.handleChange(e.target.value)} type='text'/>
      {arrayDisplay}

      
      </div>
    );
  }
}

export default App;
