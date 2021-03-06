import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:'',
    }
  };

 handleInputChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value,
   }) 
 };

 checkFields = (e) => {  //check
  e.preventDefault()
  console.log("i am here I am working ")
  if(!this.state.username ||  !this.state.password){
    return 
  }
   this.props.onSubmit(this.state)
 };//check end

  render() {
    return (
      <form onSubmit={this.checkFields}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
