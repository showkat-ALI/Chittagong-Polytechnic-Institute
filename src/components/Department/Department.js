import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "./Department.css";
// single department builder
const Department = (props) => {
  const { image, Technology, fee, seat } = props.department;
  return (
    <Card className="my-3 department-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Department: {Technology}</Card.Title>
        <Card.Text>Course Fee: ${fee}</Card.Text>
        <Card.Text>Available seat: {seat}</Card.Text>
        <Button className="read-more-button" variant="primary">
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Department;
