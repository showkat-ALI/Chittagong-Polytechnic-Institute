import React from "react";
import "./AboutUs.css";
import aboutusimage from "../../images/pexels-max-fischer-5212345.jpg";

const Aboutus = () => {
  // about-us page desgine
  return (
    <>
      <h1 className="text-center">Know more about us: </h1>
      <div className="container about-us my-5">
        <img className="container-fluid" src={aboutusimage} alt="" />
        <h4 className="container-fluid about-text">
          Welcome to the Chattogram Polytechnic Institute website. In
          Bangladesh, It is one of the oldest leading Polytechnic Institute in
          the area of Engineering and Technology with more than 50 years of
          international reputation. It prides itself not because of its age but
          for the depth of its involvement in Engineering and Technology.
        </h4>
      </div>
    </>
  );
};

export default Aboutus;
