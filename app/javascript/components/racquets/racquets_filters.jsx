import React from "react";
import PropTypes from "prop-types";
import DoubleRange from "./double_range";

export default class RacquetsFilters extends React.Component {

  render () {

    return (
      <React.Fragment>
        <div className="racquets-filters" >
          <h3>Filters</h3>
          <h6>Search :</h6>
          <input name='keywords' className="keywords" type="text"
            label='search' placeholder="keywords" defaultValue={this.props.filters.keywords}
            onChange={(name,arg) => this.props.onChange('keywords')}
          />
          <h6>Weight : (g)</h6>
          <DoubleRange
            name='weight'
            minValue={this.props.filters.minWeight}
            maxValue={this.props.filters.maxWeight}
            interval={this.props.intervals.weightInterval}
            increment={1}
            onChange={(name,arg) => this.props.onChange(name,arg)}
          />
          <h6>Balance : (cm)</h6>
          <DoubleRange
            name='balance'
            minValue={this.props.filters.minBalance}
            maxValue={this.props.filters.maxBalance}
            interval={this.props.intervals.balanceInterval}
            increment={0.1}
            onChange={(name,arg) => this.props.onChange(name,arg)}
          />
          <h6>Swingweight : (kg.cm²)</h6>
          <DoubleRange
            name='swingweight'
            minValue={this.props.filters.minSwingweight}
            maxValue={this.props.filters.maxSwingweight}
            interval={this.props.intervals.swingweightInterval}
            increment={1}
            onChange={(name,arg) => this.props.onChange(name,arg)}
          />
        </div>
      </React.Fragment>
    );
  }
}

RacquetsFilters.propTypes = {};
