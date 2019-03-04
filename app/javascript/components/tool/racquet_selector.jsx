import React from "react";
import PropTypes from "prop-types";

function RacquetElement(props) {
  return (<li onClick={props.onClick}>{props.tradeName}</li>);
}

export default class RacquetSelector extends React.Component {

  constructor(props){
    super(props);
    this.state={
      results: [],
      choice: "",
      weight:"",
      balance:"",
      swingweight:"",
      length:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    const search = event.target.value;
    const keywords = search.toUpperCase().split(" ");
    const results = [];
    this.props.racquets.forEach((racquet) => {
      let racquetName = racquet.trade_name.toUpperCase();
      const wordsAreInName = keywords.map((word) => {
        return racquetName.includes(word)
      }).reduce((a, c) => a && c);
      if(wordsAreInName) {
        results.push(racquet);
      }
    });
    this.setState({
      results: results,
      choice: search
    });
  }

  handleClick(racquet) {
    fetch(`http://localhost:3000/api/v1/racquets/${racquet.id}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          results: [],
          choice: data.trade_name,
          weight: data.reference_weight,
          balance: data.reference_balance,
          swingweight: data.reference_swingweight,
          length: data.length
        });
      this.props.onChange(data);
      });
  }


  render(){
    const racquetsList = this.state.results.map((racquet) => {
      return(
        <RacquetElement key={racquet.id.toString()} id={racquet.id} tradeName={racquet.trade_name} onClick={() => this.handleClick(racquet)}/>
        )
    });
    return(
      <React.Fragment>
        <div className="racquet-choice">
          <label>Choose your racquet model</label>
          <input type='text' name='search' onChange={this.handleChange} value={this.state.choice}/>
          <ul className='list'>
            {racquetsList}
          </ul>
        </div>
        <div className="result-choice">
          <p>Weight : {this.state.weight} g</p>
          <p>Balance : {this.state.balance} cm</p>
          <p>Swingweight : {this.state.swingweight} kg.cm²</p>
          <p>Length : {this.state.length} cm</p>
        </div>
      </React.Fragment>
    )
  }
}
