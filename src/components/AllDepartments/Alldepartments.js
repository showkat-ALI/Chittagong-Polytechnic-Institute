import React, { useEffect, useState } from "react";
import Department from "../Department/Department";
import "./AllDepartments.css";
// all departments page desgine
const Alldepartments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    fetch("./departments.json")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  return (
    <>
      <h1 className="text-center my-3">Explore More Departments here</h1>

      <div className="departments-container container my-5">
        {departments.map((department) => (
          <Department key={department.id} department={department}></Department>
        ))}
      </div>
    </>
  );
};

export default Alldepartments;
