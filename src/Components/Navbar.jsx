import React from 'react'
import './Navbar.css'
import  emg from '../static/images/dhakatopi.jpg'

const Navbar = () => {
  return (
    <div className="navigation_main">
      <nav role="Logos">
        <div className="text-center">
          <img src={emg} alt="Nepali style cap" className="logo" width="70px" height="70px" />
          <p className='brandName'>BHIRKUTI</p>
        </div>
      </nav>
      <div className="navbar-expand-md">
        <div className="navbar-dark text-center">
          <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#NavDropdown" aria-controls="NavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="text-black text-center">Menu</span>
          </button>
        </div>
        <div className="text-center mt-3 collapse navbar-collapse" id="NavDropdown">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar