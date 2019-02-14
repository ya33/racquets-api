import React from "react";
import PropTypes from "prop-types";
import Racquet from "./racquet";

export default class RacquetsList extends React.Component {


  render(){
    const racquetsList = this.props.racquets.map((racquet) => {
        return <Racquet key={racquet.id.toString()} trade_name={racquet.trade_name} onClick={() => this.props.onClick(racquet.id.toString())} />
    });

    return (
      <React.Fragment>
        <div className="racquets-selection" >
          <h3>Tennis racquets</h3>
          <div className="racquets-list">
            {racquetsList}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

RacquetsList.propTypes = {};
