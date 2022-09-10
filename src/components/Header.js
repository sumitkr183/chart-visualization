import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__cover">
        <Link to="/">Home</Link>
        <div className="header__links">
          <Link to="/chart">Chart</Link>
          <Link to="/take-a-selfie">Take a Selfie</Link>
          <Link to="/copy-to-clipboard">Copy To Clipboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
