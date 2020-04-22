import React from "react";
import PropTypes from "prop-types";

const Register = (props) => {
  return (
    <div class='register'>
      <h1 class='heading'>Register | Sign Up</h1>
      <input class='input' type='text' name='username' placeholder='Name' />
      <input class='input' type='email' name='email' placeholder='Your Email' />
      <input
        class='input'
        type='password'
        name='password'
        placeholder='Enter a Password'
      />
      <input
        class='input'
        type='password'
        name='password'
        placeholder='Re-Enter your Password'
      />
      <div class='btn reset'>
        <input type='submit' value='Register' />
      </div>
      <p>
        Already have an account?<a href='#'>Log in</a>
      </p>
    </div>
  );
};

Register.propTypes = {};

export default Register;
