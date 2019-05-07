import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor (){
    super();
    this.state = {
      list: [],
      userInput: ''
    }
    
  }
  handleChange = (value) => {
    this.setState({userInput: value})
  }
  handleAdd = () => {
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ''

    })
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return  <Todo key={index} task={element}/>
    })

    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <input 
          onChange={e => this.handleChange(e.target.value)}
          type='text'
          value={this.state.userInput}
          placeholder='Task'
          />
          
        <button 
          onClick={this.handleAdd}>Add</button>

       {list}
      </div>
    );
  }
}

export default App;
