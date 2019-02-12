import React from "react";
import PropTypes from "prop-types";

export default class DoubleRange extends React.Component {

  render(){
    return (
      <div className='double-range'>
        <div className="double-input">
          <input className='min-input' type="range" min={this.props.minValue} max={this.props.maxValue} defaultValue={this.props.value.min} step="1" onChange={() => this.props.onChange('min')}/>
          <input className='max-input' type="range" min={this.props.minValue} max={this.props.maxValue} defaultValue={this.props.value.max} step="1" onChange={() => this.props.onChange('max')}/>
        </div>
        <div className="values">
          <span className="min-value">{this.props.value.min}</span>
          <span className="max-value">{this.props.value.max}</span>
        </div>
      </div>
    );
  }
}

DoubleRange.propTypes = {};
