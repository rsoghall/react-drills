import React, {Component} from 'react'

class Login extends Component{

    constructor (){
        super ()
        
        this.state = {

            username: '',
            password: ''
          
        }
        this.handleLogin = this.handleLogin.bind(this)
      }
      handlleUserName (name){
          this.setState({username: name})
      }
      handlePassword (pw) {
          this.setState({password: pw})
      }
      handleLogin (){
        
          alert(`Username: ${this.state.username} Password: ${this.state.password}`)
      }

    render(){

        return(

            <div>
                <input onChange={(e) => this.handlleUserName(e.target.value)} type='text'/>
                <input onChange={(e) => this.handlePassword(e.target.value)} tyoe='text'/>
                <button onClick={this.handleLogin}>Login</button>

            </div>

        )
    }

}
export default Login