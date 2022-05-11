import React from "react";
import { Card } from "react-bootstrap";
import Data from "../data.json";
import { Link, useParams } from "react-router-dom";

const Singlecard = () => {
  const { id } = useParams();
  const foodDetails = Data.info;
  console.log(foodDetails);

  return (
    <>
      <div className="single-card">
        {foodDetails
          .filter((card) => card.id == id)
          .map((card, index) => (
            <Card style={{ width: "18rem" }} className="card my-3 mx-auto">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + card.image}
                className="image"
              />
              <Card.Body className="card-content">
                <p className="review">{card.review}</p>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  <div className="price">
                    <p className="current-price">{card.price}</p>
                    <p className="old">{card.oldPrice}</p>
                  </div>
                  <button className="order">Place Order</button>
                </Card.Text>
              </Card.Body>
              <Link to="/" className="back">
                Back
              </Link>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Singlecard;
