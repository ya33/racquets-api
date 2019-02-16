import React from "react";
import PropTypes from "prop-types";

export default class DoubleRange extends React.Component {

  render(){
    return (
      <div className='double-range'>
        <div className="double-input">
          <input
            className='min-input custom-range' type="range"
            min={this.props.interval.min - this.props.increment} max={this.props.interval.max + this.props.increment}
            value={this.props.minValue} step={this.props.increment} onChange={() => this.props.onChange(this.props.name, 'min')}
          />
          <input
            className='max-input custom-range' type="range"
            min={this.props.interval.min - this.props.increment} max={this.props.interval.max + this.props.increment}
            value={this.props.maxValue} step={this.props.increment} onChange={() => this.props.onChange(this.props.name, 'max')}
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
