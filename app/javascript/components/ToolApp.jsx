import React from "react";
import PropTypes from "prop-types";
import WeightInput from "./tool/weight_input"
import racquetImage from "./images/racquet-black.jpg";
import SearchResult from "./tool/search_result"
import MeasurementsResult from "./tool/measurements_result"

export default class ToolApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      length: 68.6,
      balance: 34,
      headWeight: "",
      headX: 0.5,
      shaftWeight: "",
      shaftX: 0.5,
      measurementsResult: {
        weight: "",
        balance: "",
        swingweight: "",
      },
      searchResult: {
        weight: 300,
        balance: 33,
        swingweight: 300,
      },
      search: "",
      racquets: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleMeasurementsChange = this.handleMeasurementsChange.bind(this);
    this.handleCalculationSubmit = this.handleCalculationSubmit.bind(this);
  }

  handleSearchChange() {
    const keyword = event.target.value;
    const keywords = keyword.split(" ")
    console.log('search')

    this.setState({
      search: keyword
    });
  }

  handleMeasurementsChange() {
    console.log('change')
    const value = event.target.value;
    const name= event.target.name;
    this.setState({
        [name]: value
    });
  }

  handleCalculationSubmit() {
    const weight = Number(this.state.headWeight) + Number(this.state.shaftWeight)
    const balance = ( Number(this.state.shaftWeight) * Number(this.state.shaftX) + Number(this.state.headWeight) * (Number(this.state.length) - Number(this.state.headX))) / weight

    const reference_weight = Number(this.state.searchResult.weight)
    const reference_balance = Number(this.state.searchResult.balance)
    const reference_swingweight = Number(this.state.searchResult.swingweight)
    const swingweight = reference_swingweight + weight / 1000 * balance**2 - reference_weight / 1000 * reference_balance**2 + (weight - reference_weight) /1000 * (balance - reference_balance)**2

    this.setState({
      measurementsResult:{
        weight: weight.toFixed(1),
        balance: balance.toFixed(1),
        swingweight: Math.round(swingweight),
      }
    })
  }


  render() {
    return(
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-3">
              <div className="racquet-choice">
                <label>Choose your racquet model</label>
                <input type='text'name='search' onChange={this.handleSearchChange}/>
              </div>
              <SearchResult result={this.state.searchResult} />
              <MeasurementsResult result={this.state.measurementsResult} />
            </div>
            <div className="col-xs-12 col-md-9">
              <div className="measurements">
                <img src={racquetImage} className='racquet-image' />
                <label>Racquet length
                  <input type='text' placeholder='length' defaultValue={this.state.length} onChange={this.handleCalculationChange} />
                </label>
                <div className='weight-inputs'>
                  <WeightInput
                    name='shaft'
                    balance={this.state.balance}
                    length={this.state.length}
                    xPosition={this.state.shaftX}
                    weight={this.state.shaftWeight}
                    onChange={this.handleMeasurementsChange}
                    />
                  <WeightInput
                    name='head'
                    balance={this.state.balance}
                    length={this.state.length}
                    xPosition={this.state.headX}
                    weight={this.state.headWeight}
                    onChange={this.handleMeasurementsChange}
                    />
                </div>
                <input type='submit' value='Calculate' className='btn btn-success' onClick={this.handleCalculationSubmit}/>
              </div>


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
          racquets: data.racquets
        })
      });
  }

}
