import React from "react";
import PropTypes from "prop-types";

export default class Racquet extends React.Component {

  render () {
    return (
        <button className="racquet" onClick={this.props.onClick}>{this.props.trade_name}</button>
    );
  }

}

Racquet.propTypes = {
  id: PropTypes.string,
  trade_name: PropTypes.string
};
