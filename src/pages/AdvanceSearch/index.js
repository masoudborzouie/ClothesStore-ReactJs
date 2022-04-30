import React from "react";
import { connect } from "react-redux";
import { buyCloth } from "../../Redux";

function Advancesearch(props) {
  return (
    <div>
      <h3 className="text-info">Advance Search</h3>
      <hr></hr>
      <hr></hr>

      <h1>Number of Articles - {props.numOfCloth}</h1>
      <button onClick={props.buyCloth}>Buy</button>
      <p></p>
      <hr></hr>
      <hr></hr>
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

export default connect(mapStateToProps, mapDispatchToProps)(Advancesearch);
