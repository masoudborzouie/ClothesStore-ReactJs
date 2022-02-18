import React from "react";
import { Card, Button } from "react-bootstrap";

function Product({ title, description, image, price }) {
  return (
    <div className=" row ">
      <Card style={{ height: "37rem" }} className="m-5">
        <Card.Img
          className=" p-3 img-fluid"
          style={{ height: "17rem" }}
          variant="top"
          src={image}
        />
        <Card.Body className="p-3 mt-4">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mb-4">
            {`${description.substring(0, 75)}...`}
          </Card.Text>
          <Button variant="info" className="btn price">
            {price} $
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
