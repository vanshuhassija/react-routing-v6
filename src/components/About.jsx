import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("Mounted About");

    return () => {
      console.log("Unmounted About");
    };
  }, []);
  return <h1>About</h1>;
};

export default About;
