
import React from 'react';


let formStyle = {
  display: 'inline-block'
}

let tableStyle = {
  textAlign: 'center'
}


class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.props = {users: []};
    this.state = {
      ready: false,
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ready: true});
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit() {
    //this.props.users.push([this.state.email, this.state.password]);
    console.log(this.state.email);
    console.log(this.state.password)
  }

  render() {
    return (
      <form style={formStyle}>
      <table style={tableStyle}>
        <tr>
          <td align="right"> Email: </td>
          <td align="left"> <input type="email"
                                   name="email"
                                   size="35"
                                   value={this.state.email}
                                   onChange={this.handleChange}/> <br/>
                                   </td>
        </tr>
        <tr>
          <td align="right"> Password: </td>
          <td align="left"> <input type="password"
                                   name="password"
                                   size="35"
                                   value={this.state.password}
                                   onChange={this.handleChange}/> <br/>
                                   </td>
        </tr>
        <tr>
          <td/>
          <td align="right">
                <input type="submit"
                       name="Submit"
                       disabled={!this.state.ready}
                       onClick={this.handleSubmit}/>
          </td>
        </tr>
      </table>
      </form>
    );
  }
}


let myStyle = {
  textAlign: 'justify'
}


let textFields = <div style={myStyle}>
                  <InputField/>
                </div>;


export default textFields;
