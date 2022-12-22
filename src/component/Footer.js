import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div
          className="container-fluid mt-4"
          style={{ background: "rgba(227, 240, 250, 255)" }}
        >
          <hr className="text-primary"></hr>
          <div className="row justify-content-evenly">
            <div className="col-lg-6 mt-4">
              <div className="row justify-content-evenly">
                <div className="col-2 d-none d-lg-block">
                  <a>Opinion</a>
                  <a>Situation Report</a>
                  <a>Forecast </a>
                  <a>Backgrounders</a>
                </div>
                <div className="col-md-2 d-none d-lg-block">
                  <a>Commodity</a>
                  <br />
                  <a>Economy</a>
                  <br />
                  <a>Energy Security</a>
                  <br />
                  <a>Environment</a>
                  <br />
                  <a>Militray</a>
                  <br />
                  <a>Politics</a>
                </div>
                <div className="col-md-2 d-none d-md-block ">
                  <a>Home</a>
                  <br />
                  <a>About</a>
                  <br />
                  <a>Writer</a>
                  <br />
                  <a>Write For Us</a>
                  <br />
                </div>
                <div className="col-md-2 d-none d-md-none">
                  <a>Contact us</a>
                  <a>Terms</a>
                  <a>Privecy Policy</a>
                  <a>Guidline</a>
                </div>
                <div className="col-md-2 d-none d-md-block">
                  <a>Join Now</a>
                  <br />
                  <a>Login</a>
                  <a>Free Reports</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className=" d-flex">
                <h3>Follow Us </h3>
                <h4 className="mx-auto">
                  <i className="bi bi-twitter mx-2"></i>
                  <i className="bi bi-instagram mx-2"></i>
                  <i className="bi bi-linkedin mx-2"></i>
                  <i className="bi bi-facebook mx-2"></i>
                </h4>
              </div>

              <p>Readitall.in is a registered trade name of Readitall Corp.</p>
              <p>
                © 2022 Readitall Intelligence Corp., All Rights Reserved | ISSN
                1947-2047
              </p>
              <p>Site Designed By: Kiran Jadhav</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
