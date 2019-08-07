import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        ProcLogo
      </Link>
      <div className="right menu">
        <Link to="/howitworks" className="item">
          How It Works
        </Link>
        <Link to="/generate" className="item">
          Generate
        </Link>
        <Link to="/" className="item">
          Sign In
        </Link>
        <Link to="/" className="item">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
