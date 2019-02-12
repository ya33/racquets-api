import React from "react";
import PropTypes from "prop-types";
import DoubleRange from "./double_range";

export default class RacquetsFilters extends React.Component {

  render () {
    return (
      <React.Fragment>
        <h3>Filters</h3>
        <h6>Search :</h6>
        <input className="keywords" type="text" label='search' placeholder="keywords" defaultValue={this.props.filters.keyword} onKeyUp={this.props.onKeyUp}/>
        <h6>Weight :</h6>
        <DoubleRange
          key='Weight'
          maxValue={this.props.filters.maxWeight}
          minValue={this.props.filters.minWeight}
          value={this.props.filters.weightValues}
          onChange={(input) => this.props.onChange(input)}
        />
        <h6>Balance :</h6>
        <DoubleRange
          key='Balance'
          maxValue={this.props.filters.maxBalance}
          minValue={this.props.filters.minBalance}
          value={this.props.filters.balanceValues}
          onChange={(input) => this.props.onChange(input)}
        />
        <h6>Swingweight :</h6>
        <DoubleRange
          key='Swingweight'
          maxValue={this.props.filters.maxSwingweight}
          minValue={this.props.filters.minSwingweight}
          value={this.props.filters.swingweightValues}
          onChange={(input) => this.props.onChange(input)}
        />
      </React.Fragment>
    );
  }
}

RacquetsFilters.propTypes = {};
