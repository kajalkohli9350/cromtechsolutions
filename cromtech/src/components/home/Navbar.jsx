import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Navlink} from 'react-router-dom';
export default function Navbar({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-left">
        <span className="brand-name">
          <span className="cromtek">Cromtek</span>
          <span className="solutions">Solutions</span>
        </span>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <ul class='extras'>
          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
        
          <div className="dropdown">
            <a href="/services">SERVICES</a>
            <div className="dropdown-content">
              <a href="#">ERP Solutions</a>
              <a href="#">Web Development</a>
              <a href="#">Mobile Application</a>
              <a href="#">Maintenance and Support</a>
              <a href="#">Enterprise Solution</a>
              <a href="#">IT Advisory Services</a>
              <a href="#">Business Process</a>
              <a href="#">Governance and Compliances</a>
              <a href="#">Resource Augmentations</a>
              <a href="#">Web3 solutions</a>
              <a href="#">Fintech Solutions</a>
              <a href="#">Power BI Developer</a>
            </div>
          </div>
         
          <div className="dropdown">
            <a href="/solutions">SOLUTIONS</a>
            <div className="dropdown-content">
              <a href="#">SAP Solutions</a>
              <a href="#">Omni Channel Solutions</a>
              <a href="#">HRMS and Payroll</a>
              <a href="#">School Management System</a>
              <a href="#">Hospital Management System</a>
            </div>
          </div>
          <a href="/mobility">MOBILITY</a>
          
          <div className="dropdown">
            <a href="/ecommerce">E-COMMERCE</a>
            <div className="dropdown-content">
              <a href="#">B2B Commerce</a>
              <a href="#">B2C Commerce</a>
              <a href="#">Marketplace Solutions</a>
              <a href="#">Payment Integration</a>
            </div>
          </div>
          <a href="/contact">CONTACT US</a>
         </ul> 
        </div>
      </div>
    </nav>
  )
}