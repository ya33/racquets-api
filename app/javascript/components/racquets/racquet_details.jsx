import React from "react";
import PropTypes from "prop-types";

export default class RacquetDetails extends React.Component {

  render () {
    const details = this.props.specs;
    let specs;
    if(details.trade_name != undefined){
      specs =  <div>
                <p className='trade_name'>{details.trade_name} </p>
                <p>Weight : {details.reference_weight} g</p>
                <p>Balance : {details.reference_balance} cm</p>
                <p>Swingweight : {details.reference_swingweight} kg.cm²</p>
                <p>Length : {details.length} cm</p>
                <p>Stiffness : {details.stiffness} RA</p>
                <p>Head size : {details.head_size_cm2} cm²</p>
                <p>String pattern : {details.string_pattern_mains} x {details.string_pattern_crosses}</p>
                <p>Composition : {details.composition}</p>
              </div>
    }
    return (
      <React.Fragment>
        <div className="racquet-details">
          <h3>Specifications</h3>
          {specs}
        </div>
      </React.Fragment>
    );
  }
}

RacquetDetails.propTypes = {
};
