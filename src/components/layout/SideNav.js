import React, { useEffect } from "react";

const SideNav = () => {
  useEffect(() => {
    window.M.Sidenav.init(document.querySelector(".sidenav"));
  }, []);

  return (
    <ul id="slide-out" class="sidenav sidenav-close">
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
  );
};

export default SideNav;
