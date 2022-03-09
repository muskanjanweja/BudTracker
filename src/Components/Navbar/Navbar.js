import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className= "navbar-brandnavbar-logo" to="/" exact>
        BudTracker
      </NavLink>
    <button
      className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarContentSuport" aria-expanded="false" aria-label="Toggle navigation">
      <i className = "fas fa-barstext-white"></i>

    </button>
    <div className="collapsenavbar-collapse" id="navbarSupportContent">
      <ul className="navbar-nav ml-auto">
        <div className="hori-selector">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <li className="nav-item active">
          <NavLink className="nav-link"
          to="/" exact>
            <i className="fasfa-tachometer-alt">
            </i>Home
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link"
          to="/" exact>
            <i className="fasfa-tachometer-alt">
            </i>Profile
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link"
          to="/" exact>
            <i className="fasfa-tachometer-alt">
            </i>Project
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link"
          to="/" exact>
            <i className="fasfa-tachometer-alt">
            </i>Notification
          </NavLink>
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar;