
import './login.scss'
import { Component } from 'react'
import Is from '@flk/supportive-is'

class Login extends Component {

  state = {
    validation: {
      email: null,
      password: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login')
  }

  handleEmailInput = (e) => {
    let input = e.target,
        value = input.value,
        validation = this.state.validation;

    //reset Validation email Input
    validation.email = null

    // Check if email is Empty
    if(input.required && Is.empty(value)){
      validation.email = 'Email is required!'
    }

    // Check if email is a Validate email
    // It happens when there are no previous errors
    if(validation.email === null && !Is.empty(value) ){
      if(!Is.email(value)){
        validation.email = 'Invalid Email Address'
      }
    }

    // Update state after validation
    this.setState({
      validation,
    })
  }

  handlePasswordInput = (e) => {
    let input = e.target,
        value = input.value,
        validation = this.state.validation;

    validation.password = null

    if(input.required && Is.empty(value)){
      validation.password = 'Password is required'
    }

    this.setState({
      validation,
    })

  }
  render(){
    const {email, password} = this.state.validation

    return(
      <div id='login-page' >
        <h2>Login Page</h2>
        <form onSubmit={this.handleSubmit} >
          <div className='form-group'>
            <input type='email' className='form-control' onInput={this.handleEmailInput} placeholder='Enter Name' required />
            {email && <label className='error' >{email}</label>}
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' onInput={this.handlePasswordInput} placeholder='Enter Password' required />
            {password && <label className='error' >{password}</label>}
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