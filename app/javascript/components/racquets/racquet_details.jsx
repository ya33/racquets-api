import React from "react";
import PropTypes from "prop-types";

export default class RacquetDetails extends React.Component {

  render () {
    const details = this.props.specs;

    return (
      <React.Fragment>
        <div className="racquet-details">
          <h4>Racquet specifications</h4>
          <h4>Name : {details.trade_name} </h4>
          <p>Weight : {details.reference_weight}</p>
          <p>Balance : {details.reference_balance}</p>
          <p>Swingweight : {details.reference_swingweight}</p>
          <p>Composition : {details.composition}</p>
        </div>
      </React.Fragment>
    );
  }
}

RacquetDetails.propTypes = {
};
