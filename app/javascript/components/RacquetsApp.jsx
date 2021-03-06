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
        keywords: '',
        minWeight: '',
        maxWeight: '',
        minBalance: '',
        maxBalance: '',
        minSwingweight: '',
        maxSwingweight: '',
      },
      intervals: {
        weightInterval: {
          min: '',
          max: ''
        },
        balanceInterval: {
          min: '',
          max: ''
        },
        swingweightInterval: {
          min: '',
          max: ''
        },
      },
    };
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

  handleChange(key, val='') {

    const keywords = (key === 'keywords') ? event.target.value : this.state.filters.keywords;
    const minWeight = (key === 'weight' && val === 'min') ? event.target.value : this.state.filters.minWeight;
    const maxWeight = (key === 'weight' && val === 'max') ? event.target.value : this.state.filters.maxWeight;
    const minBalance = (key === 'balance' && val === 'min') ? event.target.value : this.state.filters.minBalance;
    const maxBalance = (key === 'balance' && val === 'max') ? event.target.value : this.state.filters.maxBalance;
    const minSwingweight = (key === 'swingweight' && val === 'min') ? event.target.value : this.state.filters.minSwingweight;
    const maxSwingweight = (key === 'swingweight' && val === 'max') ? event.target.value : this.state.filters.maxSwingweight;

    const results = [];
    const words = keywords.toUpperCase().split(" ");

    this.state.allRacquets.forEach((racquet) => {
      let racquetName = racquet.trade_name.toUpperCase();
      const wordsAreInName = words.map((word) => {
        return racquetName.includes(word)
      }).reduce((a, c) => a && c);
      const isInResults = (wordsAreInName
                            && (minWeight <= racquet.reference_weight) && (racquet.reference_weight <= maxWeight)
                            && (minBalance <= racquet.reference_balance) && (racquet.reference_balance <= maxBalance)
                            && (minSwingweight <= racquet.reference_swingweight) && (racquet.reference_swingweight <= maxSwingweight)
                          )
      if(isInResults) {
        results.push(racquet);
      }
    });

    this.setState({
      racquets: results,
      filters: {
        keywords: keywords,
        minWeight: minWeight,
        maxWeight: maxWeight,
        minBalance: minBalance,
        maxBalance: maxBalance,
        minSwingweight: minSwingweight,
        maxSwingweight: maxSwingweight,
      }
    });
  }

  setInitialState(data) {
    const weight = data.map(d => Number(d.reference_weight)).sort((a,b) => {
      return a - b
    });
    const balance = data.map(d => Number(d.reference_balance)).sort((a,b) => {
      return a - b
    });
    const swingweight = data.map(d => Number(d.reference_swingweight)).sort((a,b) => {
      return a - b
    });

    this.setState({
      racquets: data,
      allRacquets: data,
      intervals: {
        weightInterval: {
          min: weight[0],
          max: weight[weight.length - 1]
          },
        balanceInterval: {
          min: balance[0],
          max: balance[balance.length - 1]
        },
        swingweightInterval: {
          min: swingweight[0],
          max: swingweight[swingweight.length - 1]
        },
      },
      filters: {
        keywords: '',
        minWeight: weight[0],
        maxWeight: weight[weight.length - 1],
        minBalance: balance[0],
        maxBalance: balance[balance.length - 1],
        minSwingweight: swingweight[0],
        maxSwingweight: swingweight[swingweight.length - 1],
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-4 col-md-2">
              <RacquetsFilters filters={this.state.filters} intervals={this.state.intervals} onChange={(k,v) => this.handleChange(k,v)} />
            </div>
            <div className="col-xs-4 col-md-8">
              <RacquetsList racquets={this.state.racquets} onClick={(racquetId) => this.handleClick(racquetId)} />
            </div>
            <div className="col-xs-4 col-md-2">
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
        this.setInitialState(data.racquets.sort((a,b) => a - b))
      });
  }
}

RacquetsApp.propTypes = {};
