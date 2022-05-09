import React from "react";
import Data from "../data.json";
import { Container } from "react-bootstrap";

const About = () => {
  console.log(Data.about);
  return (
    <>
      <div className="about">
        Home/<span className="text-warning">About MamaPut</span>
      </div>
      <Container>
        <h1 className="py-4">Who Are We?</h1>
        {Data.about.map(function (abouts) {
          return (
            <div>
              <h5
              >{abouts.heading}</h5
              >
              <p className="para py-3">{abouts.details}</p>
            </div>
          );
        })}

        <h1 className="py-4">Frequently Asked Questions</h1>

        {Data.questions.map(function (enquiry) {
          return (
            <div>
              <h5>{enquiry.question}</h5>
              <p className="para py-3">{enquiry.awnser}</p>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default About;
