import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match!");
    } else {
      register({ name, email, password });
      console.log("Success!");
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='register'>
      <h1 className='heading'>Register | Sign Up</h1>
      <form action='#' onSubmit={onSubmit}>
        <input
          className='input'
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='Name'
          required
        />
        <input
          className='input'
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Your Email'
          required
        />
        <input
          className='input'
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='Enter a Password'
          minLength='6'
        />
        <input
          className='input'
          type='password'
          name='password2'
          value={password2}
          onChange={onChange}
          placeholder='Re-Enter your Password'
          minLength='6'
        />
        <div className='btn reset'>
          <input type='submit' value='Register' />
        </div>
      </form>
      <p>
        Already have an account?<Link to='/login'>Log in</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
