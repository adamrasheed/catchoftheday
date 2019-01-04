import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <h2>INventory Login</h2>
    <p>Sign in to manage inventory</p>
    <button
      className="github"
      onClick={() => {
        props.authenticate("Github");
      }}
    >
      Login with Github
    </button>
    <button
      className="twitter"
      onClick={() => {
        props.authenticate("Twitter");
      }}
    >
      Login with Twitter
    </button>
    <button
      className="facebook"
      onClick={() => {
        props.authenticate("Facebook");
      }}
    >
      Login with Facebook
    </button>
  </nav>
);

Login.proptypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
