import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/dancegirl.jpg";
function Home() {
  return (
    <>
      <section id="header" className="home-section">
        <div className="my-5">
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                    <h1 className="heading">DANCE CLASSES FOR EVERYONE</h1>
                    <h4 className="my-3">
                      Whether you’re just starting out or you’ve got some
                      training under your belt – we got you covered.
                    </h4>
                    <div className="mt-4">
                      <NavLink
                        to="/styles"
                        className="btn btn-dark btn-lg"
                        id="button"
                      >
                        Get Started
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2">
                    <img
                      src={web}
                      alt="imagegirl"
                      className="image-fluid mainimg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
