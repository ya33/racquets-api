import React from "react";
import PropTypes from "prop-types";


export default class WeightInput extends React.Component {

  render() {
    return(
      <React.Fragment>
        <div className={"input " + this.props.name + '-input'}>
          <input type='range' className='custom-range' name={this.props.name + "X"}
            min={0.5} max={this.props.balance} step={0.1}
            value={this.props.xPosition} onChange={this.props.onChange}
            />
          <span>location from {this.props.name} (cm)</span>
          <input type='text' name={this.props.name + "X"} value={this.props.xPosition}
            onChange={this.props.onChange} />
          <span>{this.props.name} weight (g)</span>
          <input type='text' name={this.props.name + "Weight"}
            value={this.props.weight}
            onChange={this.props.onChange} />
        </div>
      </React.Fragment>
    )
  }
}
