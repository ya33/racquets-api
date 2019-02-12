import React from "react";
import PropTypes from "prop-types";
import RacquetsFilters from "./racquets/racquets_filters";
import RacquetsList from "./racquets/racquets_list";
import RacquetDetails from "./racquets/racquet_details";

export default class RacquetsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRacquets:[],
      racquets:[],
      details: {},
      filters: {
        keyword: '',
        minWeight: 1,
        maxWeight: 100,
        minBalance: 1,
        maxBalance: 100,
        minSwingweight: 1,
        maxSwingweight: 100,
        weightValues: {
          min: 5,
          max: 95
        },
        balanceValues: {
          min: 5,
          max: 95
        },
        swingweightValues: {
          min: 5,
          max: 95
        },
      }
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(racquetId) {
    fetch(`http://localhost:3000/api/v1/racquets/${racquetId}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          details: data
        })
      });
  }

  handleKeyUp(event) {
    const keyword = event.target.value;
    this.setState({
      filters: {
        keyword: keyword,
      }
    });
    const results = [];
    this.state.allRacquets.forEach((racquet) => {
      let racquetName = racquet.trade_name.toUpperCase()
      if(racquetName.includes(keyword.toUpperCase()) === true) {
        results.push(racquet);
      }
    });
    this.setState({
      racquets: results
    });
  }

  handleChange(input) {
    const min = (input === 'min')
    if(min) {
      this.setState({
        filters: {
           weightValues: {
             min: event.target.value,
             max: this.state.filters.weightValues.max
           }
        }
      });
    } else {
      this.setState({
        filters: {
          weightValues: {
            min: this.state.filters.weightValues.min,
            max: event.target.value
        }
        }

      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 racquets-filters" >
              <RacquetsFilters filters={this.state.filters} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
            </div>
            <div className="col-md-8 racquets-selection" >
              <RacquetsList racquets={this.state.racquets} onClick={(racquetId) => this.handleClick(racquetId)} />
            </div>
            <div className="col-md-2 racquet-details">
              <RacquetDetails specs={this.state.details} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/racquets")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          racquets: data,
          allRacquets: data
        })
      });
  }
}

RacquetsApp.propTypes = {};
