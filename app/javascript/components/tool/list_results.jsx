import React from "react";
import PropTypes from "prop-types";

export default class ListResults extends React.Component {

  render(){
    return(
      <React.Fragment>
        <ul className='list'>
          <li>
            {this.props.racquets}
          </li>
        </ul>
      </React.Fragment>
      )
  }

}
