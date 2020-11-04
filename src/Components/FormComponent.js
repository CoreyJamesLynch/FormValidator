import React from 'react';
import './FormComponent.css';

class FormComponent extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  clickHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    const { password2 } = this.state;
    return (
      <div className="container">
        <form id="form" className="form">
          <h2>Register With Us</h2>
          <div className="form-control">
            <label htmlFor="username">
              Username
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={this.clickHandler}
              />
              <small>Error Message</small>
            </label>
          </div>

          <div className="form-control">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={this.clickHandler}
              />
              <small>Error Message</small>
            </label>
          </div>

          <div className="form-control">
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={this.clickHandler}
              />
              <small>Error Message</small>
            </label>
          </div>

          <div className="form-control">
            <label htmlFor="password2">
              Confirm Password
              <input
                type="password"
                id="password2"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={this.clickHandler}
              />
              <small>Error Message</small>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
