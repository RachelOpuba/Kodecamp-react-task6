import React from "react";
import Slider from "./Slider";
import Data from "../data.json";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  console.log(Data.info);
  return (
    <>
      <Slider />
      <Container className=" mt-3">
        <Row className="">
          {Data.info.map(function (food) {
            return ( 
              <Col lg={3} md={4} sm={6} key={food.id}>
                <Card style={{ width: "" }} className="card my-3 mx-auto">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + food.image}
                    className="image"
                  />
                  <Card.Body className="card-content">
                    <p className="review">{food.review}</p>
                    <Card.Title>{food.title}</Card.Title>
                    <Card.Text>
                      <div className="price">
                        <p className="current-price">N{food.price}</p>
                        <p className="old">N{food.oldPrice}</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
