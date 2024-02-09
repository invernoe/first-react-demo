import React, { useEffect, useState } from "react";
import StarLogo from "./StarLogo";

export default function About() {
  return (
    <>
      <section className="bg-main-color d-flex justify-content-center align-items-center text-white">
        <div className="container text-center">
          <h1 className="fw-bold">ABOUT COMPONENT</h1>
          <StarLogo lineColor={"bg-white"}/>
          <div className="row text-start">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
