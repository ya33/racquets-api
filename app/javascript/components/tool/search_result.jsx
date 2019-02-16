import React from "react";
import PropTypes from "prop-types";

export default class SearchResult extends React.Component {

  render() {
    return(
      <React.Fragment>
        <div className="result-choice">
          <p>Weight : {this.props.result.weight} g</p>
          <p>Balance :{this.props.result.balance} cm</p>
          <p>Swingweight : {this.props.result.swingweight} kg.cm²</p>
          <p>Length : {this.props.result.length} cm</p>
        </div>
      </React.Fragment>
    )
  }
}
