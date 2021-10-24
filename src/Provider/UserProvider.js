import React from 'react';

const UserContext = React.createContext();
class UserProvider extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: null,
    confirmPassword: null,
    phoneNumber: null,
  };

  setFirstName = firstname => {
    this.setState({firstName: firstname});
  };

  setLastName = value => {
    this.setState({lastName: value});
  };

  setEmail = email => {
    this.setState({email: email});
  };
  setPassword = value => {
    this.setState({password: value});
  };

  setConfirmPassword = value => {
    this.setState({confirmPassword: value});
  };
  setPhoneNumber = value => {
    this.setState({phoneNumber: value});
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          phoneNumber: this.state.phoneNumber,
          setfirstname: this.setFirstName,
          setlastname: this.setLastName,
          setemail: this.setEmail,
          setpassword: this.setPassword,
          setconfirmpassword: this.setConfirmPassword,
          setphonenumber: this.setPhoneNumber,
        }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export {UserProvider, UserContext};
