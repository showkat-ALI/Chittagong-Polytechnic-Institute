import React from "react";
import alumniAsso from "../../images/pexels-pavel-danilyuk-7942516.jpg";
import debateClub from "../../images/debateClub.png";
import "./coCuriculam.css";
// coCurriculam page desgine

const CoCurriCulams = () => {
  return (
    <div className="container">
      <h3 className="text-center">
        A greate chance to connect with other students is to participate in co
        Curriculam activities.
      </h3>
      <h4 className="text-center">Dont forget to join them</h4>
      <div className="my-5">
        <h1>Alumni Association</h1>
        <div className="alumni-container">
          <img className="container-fluid" src={alumniAsso} alt="" />
          <h4>
            An alumni association or alumnae association is an association of
            graduates or, more broadly, of former students. It is sometimes
            called an "alumni meet." We have greate alumni assocition from 2011.
            All students get together here
          </h4>
        </div>
      </div>
      <div className="my-5">
        <h1>Debate Club</h1>
        <div className="debate-club ">
          <img className="container-fluid" src={debateClub} alt="" />
          <h4>
            A debate club gives students of all abilities a fun way of
            developing their oracy skills. ... The club could also help students
            to become more informed about political and global affairs, or
            provide a venue for students to train for debate competitions with
            local school, or at a national level.
          </h4>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CoCurriCulams;
