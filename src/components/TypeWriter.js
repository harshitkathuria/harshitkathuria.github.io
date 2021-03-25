import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div id="type-writer">
      <Typewriter
        options={{
          strings: ["Web Developer", "MERN Stack Developer", "Problem Solver"],
          cursor: "|",
          autoStart: true,
          loop: true,
          deleteSpeed: 150
        }}
      />
    </div>
  );
};

export default TypeWriter;
