import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="continer my-5">
        <div className="wrapper">
          <div className="contact-info">
            <ul>
              <li>
                <i className="fa fa-road"></i> 44 Main Street
              </li>
              <li>
                <i className="fa fa-phone"></i> (555) 555-5555
              </li>
              <li>
                <i className="fa fa-envelope"></i> test@phoenix.com
              </li>
            </ul>
          </div>

          <div className="contact">
            <h3>E-mail Us</h3>

            <form id="contact-form">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
              </p>

              <p>
                <label>Address</label>
                <input type="text" name="address" id="company" />
              </p>

              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
              </p>

              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>

              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>

              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
