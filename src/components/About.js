import React from "react";

const About = () => {
  return (
    <div id="about" className="section">
      <div className="row">
        <div className="col s12 center">
          <div className="heading-primary">
            About Me
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m5 l5">
          <img
            src="https://source.unsplash.com/random"
            alt="Profile"
            className="responsive-img circle"
          />
        </div>
        <div id="about-content" className="col s12 m7 l7">
          <div className="row">
            <p className="content-text">
              Hi, I am <span className="bold">Harshit Kathuria,</span> a
              sophomore at Maharaja Agrasen Institute of Technology(MAIT). I am
              pursuing Bachelor of Technology in Computer Science Engineering.
            </p>
          </div>
          <div className="row">
            <p className="content-text">
              I have a keen interest in programming and Web-Development. I am a
              MERN stack developer and like creating web applications. I have
              worked with many frameworks and always try to increase my apetite
              for learning more new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
