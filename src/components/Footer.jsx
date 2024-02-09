import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-white">
        <div className="bg-second-color">
            <div className="container py-5">
              <div className="row py-5">
                <div className="col-md-4">
                  <h3 className="text-uppercase">Location</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4">
                  <h3 className="tex-uppercase">Around the Web</h3>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-facebook p-2 mx-1 border border-white rounded-circle"></i>
                    <i className="fab fa-twitter p-2 mx-1 border border-white rounded-circle"></i>
                    <i className="fab fa-linkedin p-2 mx-1 border border-white rounded-circle"></i>
                    <i className="fas fa-globe p-2 mx-1 border border-white rounded-circle"></i>
                  </div>
                </div>
                <div className="col-md-4">
                  <h3 className="text-uppercase">About Freelancer</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created by
                    Route
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div className="bg-second-color-dark py-4">
            <p className="m-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
