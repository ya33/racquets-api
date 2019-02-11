import React from "react";
import PropTypes from "prop-types";

export default class InputRange extends React.Component {

  render(){
    return (
      <React.Fragment>
        <div className="double-range">
          <input key='min' type="range" min={this.props.minValue} max={this.props.maxValue} defaultValue={this.props.value.min} step="1" onChange={() => this.props.onChange('min')}/>
          <input key='max' type="range" min={this.props.minValue} max={this.props.maxValue} defaultValue={this.props.value.max} step="1" onChange={() => this.props.onChange('max')}/>
        </div>
        <div className="values">
          <span className="min-value">{this.props.value.min}</span>
          <br/>
          <span className="max-value">{this.props.value.max}</span>
        </div>
      </React.Fragment>
    );
  }
}

InputRange.propTypes = {};
