import React, { useEffect, useState } from "react";
import DepartmentToShow from "../DepartmentsToShow/DepartmentToShow";
import "./Showcase.css";
// home showcase card builder

const ShowCase = () => {
  const [showcase, setShowcase] = useState([]);
  useEffect(() => {
    fetch("./departments.json")
      .then((res) => res.json())
      .then((data) => setShowcase(data));
  }, []);
  return (
    <section className="container top-showcase-container my-5">
      <div className="text-center text-light my-2">
        <h1>Choose your favourite course to start a journey with us.</h1>
        <h2>
          Explore Your Engineering Career with us so ,What are you waiting for.
        </h2>
        <h3 className="text-center">Departments:</h3>
      </div>
      <div className="showcase-container">
        {showcase.slice(0, 4).map((department) => (
          <DepartmentToShow
            department={department}
            key={department.id}
          ></DepartmentToShow>
        ))}
      </div>
    </section>
  );
};

export default ShowCase;
