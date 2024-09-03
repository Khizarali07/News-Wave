import React, { Component } from "react";
import "../Components CSS/style.css"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-danger bold" href="/">
              News-Wave
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/general">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/health">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/science">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/technology">
                    Technology
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About-Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact-Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
