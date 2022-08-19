import React from "react";
import "./Button.scss";

const Button = ({ children, className, variant, icon }) => {
  return (
    <button
      className={`btn ${className ? className : ""} ${variant ? `btn__${variant}` : "btn__red" }`}
    >
      {children}
      {icon ? <div><img src={icon} alt="" /></div> : null}
    </button>
  );
};

export default Button;
