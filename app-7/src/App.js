import React, { Component } from 'react';
import './App.css';
import NewTask from './components/NewTaks';
import List from './components/List'

class App extends Component {
  constructor(){
    super();
    this.state ={
      list: []
    }
  }
  addTask = (userInput) => {
    this.setState({list: [...this.state.list, userInput]})
  }
  render() {
    return (
      <div className="App">
      <h1>My to do List:</h1>
      <NewTask add={this.addTask}/>
      <List list={this.state.list}/>
        
      </div>
    );
  }
}

export default App;
