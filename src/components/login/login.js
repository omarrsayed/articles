import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../redux/actions/user-actions";
import { bindActionCreators } from "redux";

function Login({ login, history }) {
  const [user, setUser] = useState({});

  function onLogin(event) {
    event.preventDefault();
    login(user);
    history.push("/home");
  }

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={onLogin}>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" onChange={onChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={onChange} />
      <button type="submit">Login</button>
    </form>
  );
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    user: {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
