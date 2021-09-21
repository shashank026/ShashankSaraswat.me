import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../src/img/image2.png";
import "./index.css";

const Navbar = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link onClick={() => window.location.replace("/#home")}><img src={logo} className="img-fluid-animation" alt="home img" /></Link>
              <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" >
                <ul className="ml-auto navbar-nav" >
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" onClick={() => window.location.replace("/#about")}>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={() => window.location.replace("/#projects")}>Projects</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" onClick={() => window.location.replace("/#contact")}>Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;