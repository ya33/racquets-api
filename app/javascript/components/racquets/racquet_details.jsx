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
                <p>Composition : {details.composition}</p>
              </div>
    }
    return (
      <React.Fragment>
        <h3>Specifications</h3>
        {specs}
      </React.Fragment>
    );
  }
}

RacquetDetails.propTypes = {
};
