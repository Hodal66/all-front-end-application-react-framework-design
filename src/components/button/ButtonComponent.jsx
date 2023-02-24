import React from "react";
import { Link } from "react-router-dom";
import "./button.css";
function ButtonComponent({ buttonText }) {
  return (
    <div>
      <Link to="/sign-up">
        <button className="btn">{buttonText}</button>
      </Link>
    </div>
  );
}

export default ButtonComponent;
