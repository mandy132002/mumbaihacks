import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Undefined</h1>
        </div>
        <div>
          <ul>
            <li className="nav-item">
              <Link to={`/report`}>Report</Link>
            </li>
            <li>
              <a href="#report" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="#donate" className="nav-item">
                Donate
              </a>
            </li>
            <li>
              <a href="#sos" class="sos">
                SOS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
