import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div class='login'>
      <h1 class='heading'>Log In</h1>
      <input class='input' type='text' name='email' placeholder='Your Email' />
      <input
        class='input'
        type='password'
        name='password'
        placeholder='Your Registered Password'
      />
      <div class='btn reset'>
        <input type='submit' value='Log In' />
        <a href='#'>Forgot Password</a>
      </div>
      <p>
        Need an account? <a href='#'>Sign Up</a>
      </p>
    </div>
  );
};

Login.propTypes = {};

export default Login;
