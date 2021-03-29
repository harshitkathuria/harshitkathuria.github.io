import React from "react";
import ParticleBackground from "./particles/ParticleBackground";
import TypeWriter from "./TypeWriter";

const Home = () => {
  return (
    <div id="home">
      <TypeWriter />
      <ParticleBackground />
      <button
        onClick={() => {
          window.location.href = "/#about";
        }}
        id="expand-btn"
        className="transparent btn-large btn-floating"
      >
        <i className="material-icons" style={{ fontSize: "3rem" }}>
          expand_more
        </i>
      </button>
    </div>
  );
};

export default Home;
