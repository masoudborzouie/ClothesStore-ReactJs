import React from "react";
import { connect } from "react-redux";
import { buyCloth } from "../../Redux";
import { Card, Button } from "react-bootstrap";

function Product({ title, description, image, price }, props) {
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
          <hr></hr>
          <Button onClick={props.buyCloth}>Buy</Button>
          <h6>Number of Articles - {props.numOfCloth}</h6>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCloth: state.numOfCloth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCloth: () => dispatch(buyCloth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
