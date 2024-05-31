// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    userName: '',
    password: '',
  }

  onChangeUser = event => {
    this.setState({userName: event.target.value})
  }

  onChangePass = event => {
    this.setState({userName: event.target.value})
  }

  onMistake = event => {
    if (event.target.value === '') {
      console.log('kkk')
    }
  }

  onMistakePass = event => {
    if (event.target.value === '') {
      console.log('LLL')
    }
  }

  userNameFun = () => {
    const {userName} = this.props
    return (
      <div>
        <label htmlFor="username"> USERNAME </label>
        <div>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={this.onChangeUser}
            onBlur={this.onMistake}
          />
        </div>
      </div>
    )
  }

  userPassFun = () => {
    const {password} = this.props
    return (
      <div>
        <div>
          <label htmlFor="password"> PASSWORD </label>
        </div>
        <div>
          <input
            type="text"
            id="password"
            value={password}
            onChange={this.onChangePass}
            onBlur={this.onMistakePass}
          />
        </div>
      </div>
    )
  }

  onButton = () => {
    console.log('Button')
  }

  render() {
    return (
      <div className="background">
        <h1 className="heading"> Registration </h1>
        <div> {this.userNameFun()} </div>
        <div> {this.userPassFun()} </div>
        <button className="button" onClick={this.onButton}>
          {' '}
          Login{' '}
        </button>
      </div>
    )
  }
}

export default RegistrationForm
