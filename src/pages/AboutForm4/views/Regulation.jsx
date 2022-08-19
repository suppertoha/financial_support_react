import React from "react";
import "./Regulation.scss";

export default function Regulation(props) {
  return (
    <div className="regulation">
        <div className="regulation__image">{props.regulation.image}</div>
        <div className="regulation__text">{props.regulation.text}</div>
    </div>
  );
}
