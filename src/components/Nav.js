import React from 'react';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

function Nav(){
           return(
                      <nav className='bg-light navbar navbar-expand-lg' id="nav">
                          <div className="container">
                              <div>
                                  <img src={logo} className='logo' alt="" />
                              </div>

                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                  <span className="navbar-toggler-icon"></span>
                              </button>
                  
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                  <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                                      <li className="nav-item">
                                          <Link to='/' className="nav-link link-dark">HOME</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link to='/about' className="nav-link link-dark">ABOUT</Link>
                                      </li>
                                      <li className="nav-item dropdown">
                                          <a href="#" className="nav-link dropdown-toggle link-dark" data-bs-toggle="dropdown">SERVICES</a>
                                          <ul className="dropdown-menu">
                                              <li><a className="dropdown-item" href="#">IMPORTATION</a></li>
                                              <li><a className="dropdown-item" href="#">EXPORTATION</a></li>
                                              <li><a className="dropdown-item" href="#">TRANSPORTATION</a></li>
                                              {/* <li><hr className="dropdown-divider"></li> */}
                                              <li><a className="dropdown-item" href="#">SEE MORE</a></li>
                                          </ul>
                                      </li>
                                      <li className="nav-item">
                                          <Link to='/contact' className="nav-link link-dark">CONTACT</Link>
                                      </li>
                                      <li className="nav-item">
                                          <a href="#" className="nav-link link-dark">GALLERY</a>
                                      </li>
                                  </ul>
              
                                  <div>
                                      <a href="#form" className="btn btn-danger" onclick="confirmation()">Apply Now</a>
                                      <button className="btn btn-dark" onclick="dark()" id="dark">Dark</button>
                                      <button className="btn btn-light border-2 border-dark" onclick="light()" id="light">Light</button>
                                  </div>
                              </div>
                          </div>
                      </nav>
           );
};

export default Nav