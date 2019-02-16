import React from "react";
import PropTypes from "prop-types";

export default class MeasurementsResult extends React.Component {

  render() {
    return(
      <React.Fragment>
        <div className="measurements-results">
          <h3>Results : </h3>
          <p>Weight : {this.props.result.weight} g</p>
          <p>Balance : {this.props.result.balance} cm</p>
          <p>Swingweight estimation : {this.props.result.swingweight} kg.cm²</p>
        </div>
      </React.Fragment>
    )
  }
}
