import React from "react";
import { connect } from "react-redux";
import { addPrice } from "../actions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addPrice(props.feature)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store
  };
};

export default connect(mapStateToProps, { addPrice })(AdditionalFeature);
