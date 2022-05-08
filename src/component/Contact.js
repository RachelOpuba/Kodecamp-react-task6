import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div className="about mb-5">
        Home/<span className="text-warning">Contact MamaPut</span>
      </div>
      <Container className="info-container">
        <h2 className="py-4">Contact Info</h2>
        <div className="contact-info">
          <div className="contact mx-auto">
            <h4>Our Address</h4>
            <p>Suite A7 Bensima House, Red Sea close Off</p>
            <p>Aguiyi Ironsi street Maitama, Abuja.</p>
          </div>
          <div className="contact mx-auto">
            <p>+23489487455</p>
            <span className="contact-span"></span>
            <p>info@mamaput.com</p>
          </div>
          <div className="contact mx-auto">
            <h3>Opening Hour</h3>
            <p>Monday - Saturday. 9:00AM - 6:00PM</p>
          </div>
        </div>
      </Container>

      <Container className="py-5">
        <div className="form mt-5">
          <h2>Get In Touch</h2>
          <form>
            <div className="name-email">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" className="subject" />
            <textarea placeholder="Your Message" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
