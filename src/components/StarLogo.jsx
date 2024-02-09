import React from "react";
import "./StarLogo.css"

export default function StarLogo({lineColor}) {
  return (
    <div className="d-flex justify-content-center align-items-center py-3">
      <div className={"line " + lineColor}></div>
      <i className="fas fa-star mx-3"></i>
      <div className={"line " + lineColor}></div>
    </div>
  );
}
