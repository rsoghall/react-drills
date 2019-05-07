import React, { Component } from 'react'

export class NewTaks extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }

  handleChange = (value) => {
    this.setState({ userInput: value})
  }
  handleAdd = () => {
    this.props.add(this.state.userInput)
    this.setState({ userInput: ''})
  }
  render() {
    return (
      <div>
        <input 
        value={this.state.userInput}
        placeholder='Enter Task'
        onChange={ e => {this.handleChange(e.target.value)}}
        type="text"
        />
        <button onClick={this.handleAdd}>Add</button>
        
      </div>
    )
  }
}

export default NewTaks
