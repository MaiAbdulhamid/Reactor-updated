import { Component } from 'react'
import './login.scss'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login')
  }

  render(){
    return(
      <div id='login-page' >
        <h2>Login Page</h2>
        <form onSubmit={this.handleSubmit} >
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Enter Name' />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' placeholder='Enter Password' />
          </div>
          <div id='button-wrapper'>
            <button className='btn' >Login</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Login