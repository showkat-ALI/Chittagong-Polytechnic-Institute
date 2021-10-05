import React from "react";
import { Card } from "react-bootstrap";
import ShowCase from "../ShowCaseDepartments/ShowCase";
import ContactUs from "../ContactUs/ContactUs";
import "./Header.css";
import cpi from "../../images/to-cpi.jpg";
// header builder

const Header = () => {
  return (
    <>
      <Card className=" text-white header container my-5 ">
        <Card.Img className="image" src={cpi} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="text-center top-heading ">
            Chittagong Polytechnic Institute
          </Card.Title>
          <Card.Text className="text-center sub-heading">
            This is the website of Chittagong polytechnic institute. Get
            connected with us to know more
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <main>
        <ShowCase></ShowCase>
        <h1 className="text-center text-success">Contact Us</h1>
        <ContactUs></ContactUs>
      </main>
    </>
  );
};

export default Header;
