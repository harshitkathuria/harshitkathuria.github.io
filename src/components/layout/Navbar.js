import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (window.pageYOffset === 0) {
        document.getElementById("navbar").classList.remove("scrolled");
      } else {
        document.getElementById("navbar").classList.add("scrolled");
      }
    });
  });

  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <a href="#home" className="brand-logo">
          H K
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#works">My Works</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
