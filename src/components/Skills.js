import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="section">
      <div className="row center">
        <div className="col s12">
          <div className="heading-primary">My Specializations</div>
          <div className="subtitle-container">
            <p className="subtitle">
              I am a full stack developer with my expertise in
            </p>
          </div>
        </div>
      </div>

      {/* <div className="skills-container">
        <div className="row">
          <div className="col s12 l2">
            <div className="skill">
              <img className="responsive-img" src="/assets/HTML.png" alt="" />
            </div>
          </div>
          <div className="col s12 l2">
            <div className="skill">
              <img className="responsive-img" src="/assets/CSS.png" alt="" />
            </div>
          </div>
          <div className="col s12 l2">
            <div className="skill">
              <img className="responsive-img" src="/assets/JS.png" alt="" />
            </div>
          </div>
          <div className="col s12 l2">
            <div className="skill">
              <img className="responsive-img" src="/assets/React.jpg" alt="" />
            </div>
          </div>
          <div className="col s12 l3">
            <div className="skill">
              <img className="responsive-img" src="/assets/Node.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="skills-container">
        <div className="skill center">
          <img src="/assets/JS.png" alt="" className="responsive-img" />
          <h5>Javascript</h5>
        </div>
        <div className="skill center">
          <img src="/assets/Express.png" alt="" className="responsive-img" />
          <h5>Express</h5>
        </div>
        <div className="skill center">
          <img src="/assets/React.png" alt="" className="responsive-img" />
          <h5>React</h5>
        </div>
        <div className="skill center">
          <img src="/assets/Node.png" alt="" className="responsive-img" />
          <h5>Node</h5>
        </div>
      </div>
    </div>
  );
};

export default Skills;
