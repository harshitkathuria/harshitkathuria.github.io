import React from "react";

const Footer = () => {
  return (
    <footer className="footer black white-text">
      <div className="container">
        <div className="copyright-content left">
          Copyright &copy; {new Date().getFullYear()}
        </div>
        <ul className="links right">
          <li>
            <a
              href="https://www.linkedin.com/in/harshit-kathuria-365217192/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/harshitkathuria"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_harshit__14"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/1409_harshit"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <div className="clearfix"></div>
      </div>
    </footer>
  );
};

export default Footer;
