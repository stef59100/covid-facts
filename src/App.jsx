import React from "react";
import axios from 'axios';
import "./App.scss";
import API from "./config.jsx";
import CountryComponent from './components/country/index';
import GlobalDataComponent from './components/global/index';
import Select from 'react-select';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      covid: [],
      global: [],
      countryList:[],
      countryData: [],
      appliname: "CovidFacts"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    API.get()
      .then(res => {
        const countries = res.data;
        //console.log(countries);
        this.setState({ covid: countries });
        //console.log(`Etat du state:  ${this.state.covid}`);
      })
      .catch(error => {
        console.log("error", error);
      });

    axios.get(`https://api.covid19api.com/summary`)
      .then(summ => {
       // console.log(summ)
        this.setState({ global: summ.data.Global, countryList: summ.data.Countries })
        console.log(this.state.countryList)
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  handleChange(selectedOption) {
    const selectedCountry = this.state.covid.filter(item => item.Country === selectedOption.value)
    //console.log('hello', selectedCountry.map(country=>country.Country));
    this.setState({ countryData: selectedCountry });
  }

  render() {
    let optionsArray = [];
    //console.log(typeof(this.state.covid), this.state.covid);
     this.state.countryList.forEach(item => {
      let ob = {};
      ob.value = item.Country;
      ob.label = item.Country;
      optionsArray.push(ob);
    });
   //console.log(optionsArray);


    return (
      <div className="App text-secondary">
        <header className="App-header bg-primary mb-2">
          <h1 className="text-black">{this.state.appliname}</h1>
        </header>
        <div className="container">
          <div className="row justify-content-center bg-clearer pt-2 pb-2 rounded">
            <GlobalDataComponent datas={this.state.global} />
          </div>
          <div className="row justify-content-center pt-2 pb-2">
            <label htmlFor="">Selectionnez un pays : </label>
            <Select options={optionsArray} onChange={this.handleChange} className="col-4 " />
          </div>
          <div className="row justify-content-center"><CountryComponent countrydata={this.state.countryData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
