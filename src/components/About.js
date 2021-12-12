import React from "react";

const About = () => {
  return (
    <div id="about" className="section">
      <div className="row">
        <div className="col s12 offset-l4" style={{ padding: 0 }}>
          <div className="heading-primary">
            About Me
            {/* <span className="line"></span> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4">
          <img
            src="/assets/me.jpg"
            alt="Profile"
            className="responsive-img circle"
          />
          {/* <div className="about-image"></div> */}
        </div>
        <div id="about-content" className="col s12 l8">
          <p className="content-text">
            Hi, I am <span className="bold">Harshit Kathuria,</span> a sophomore
            at Maharaja Agrasen Institute of Technology(MAIT). I am pursuing
            Bachelor of Technology in Computer Science Engineering.
          </p>
          <br />
          <p className="content-text">
            <br />I have a keen interest in programming and Web-Development. I
            am a full stack developer with experience in various javascript
            frameworks like reactjs, electron, nodejs. I like creating web
            applications. I can create applications that are beautifully
            designed and functions well.
          </p>
          <br />
          <p className="content-text">
            <br />I have worked with many frameworks and always try to increase
            my apetite for learning more new technologies.
          </p>
          <div id="about-contact" style={{ marginTop: "30px" }}>
            <span>Contact Me</span>
            <button
              id="contact-btn"
              className="btn white"
              onClick={() => {
                window.location.href = "/#contact";
              }}
            >
              <i className="black-text material-icons">arrow_right_alt</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
