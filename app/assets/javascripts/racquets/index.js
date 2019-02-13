const racquets = document.querySelectorAll('.racquet');
const racquetDetails = document.querySelector('.racquet-details');
const racquetFilters = document.querySelectorAll('.racquet-filters');

const detailsDisplay = (data) => {
  racquet.trade_name = data.trade_name
  racquet.reference_weight = data.reference_weight
  racquet.reference_balance = data.reference_balance
  racquet.reference_swingweight = data.reference_swingweight
  racquet.composition = data.composition
  racquetDetails.innerHTML = `<h4>Racquet specifications</h2>\
    <h4>${racquet.trade_name}</h4>\
    <p>Weight : ${racquet.reference_weight} </p>\
    <p>Balance : ${racquet.reference_balance} </p>\
    <p>Swingweight : ${racquet.reference_swingweight} </p>\
    <p>Composition : ${racquet.composition} </p>`
};

const fetchingAPI = (key) => {
  fetch(`http://localhost:3000/api/v1/racquets/${key}`)
    .then(response => response.json())
    .then((data) => {
      detailsDisplay(data);
    })
}

const handleClick = (event) => {
  key = event.target.dataset.key;
  fetchingAPI(key);
}

racquets.forEach((racquet) => {
  racquet.addEventListener('click', handleClick);
});


const displayRacquets = (results) => {
  console.log(results)
}

const racquetSearch = (keyword) => {
  console.log(keyword)
  results = [];
  allRacquets.forEach((racquet) => {
    racquetName = racquet.trade_name.toUpperCase()
    word = keyword.toUpperCase()
    if(racquetName.includes(word) === true) {
      results.push(racquet);
    }
  })
  displayRacquets(results);
}

const handleChange = (event) => {
  keyword = event.target.value;
  racquetSearch(keyword);
}

racquetFilters.forEach((filter) => {
  filter.addEventListener('keyup', handleChange);
});

const racquet = {
  trade_name : "",
  reference_weight : "",
  reference_balance : "",
  reference_swingweight : "",
  composition : ""
};

let allRacquets = []
fetch("http://localhost:3000/api/v1/racquets")
  .then(response => response.json())
  .then((data) => {
    allRacquets = data
  })
