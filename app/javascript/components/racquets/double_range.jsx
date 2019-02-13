import React from "react";
import PropTypes from "prop-types";

export default class DoubleRange extends React.Component {

  render(){
    console.log(this.props)
    return (
      <div className='double-range'>
        <div className="double-input">
          <input
            className='min-input' type="range"
            min={this.props.interval.min} max={this.props.interval.max}
            value={this.props.minValue} step="1" onChange={() => this.props.onChange(this.props.name, 'min')}
          />
          <input
            className='max-input' type="range"
            min={this.props.interval.min} max={this.props.interval.max}
            value={this.props.maxValue} step="1" onChange={() => this.props.onChange(this.props.name, 'max')}
          />
        </div>
        <div className="values">
          <span className="min-value">{this.props.minValue}</span>
          <span className="max-value">{this.props.maxValue}</span>
        </div>
      </div>
    );
  }
}

DoubleRange.propTypes = {};
