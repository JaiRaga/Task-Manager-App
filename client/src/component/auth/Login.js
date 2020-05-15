import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='login'>
      <h1 className='heading'>Log In</h1>
      <form action='#' onSubmit={onSubmit}>
        <input
          className='input'
          type='text'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Your Email'
        />
        <input
          className='input'
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='Your Registered Password'
        />
        <div className='btn reset'>
          <input type='submit' value='Log In' />
          <a href='#'>Forgot Password</a>
        </div>
      </form>
      <p>
        Need an account? <Link to='/register'>Sign Up</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default Login;
