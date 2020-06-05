import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        <Link onClick={() => dispatch(logout())} to='/logout'>
          Logout
        </Link>
      </nav>
      Dashboard
    </div>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Dashboard;
