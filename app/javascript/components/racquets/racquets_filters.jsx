import React from "react";
import PropTypes from "prop-types";
import InputRange from "./input_range";

export default class RacquetsFilters extends React.Component {

  render () {
    return (
      <React.Fragment>
        <div className="racquet-filters">
          <h3>Filters</h3>
          <input type="text" label='search' placeholder="keywords" defaultValue={this.props.filters.keyword} onKeyUp={this.props.onKeyUp}/>
          <InputRange
            maxValue={this.props.filters.maxWeight}
            minValue={this.props.filters.minWeight}
            value={this.props.filters.weightValues}
            onChange={(input) => this.props.onChange(input)}
            />
        </div>
      </React.Fragment>
    );
  }
}

RacquetsFilters.propTypes = {};
