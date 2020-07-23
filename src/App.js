import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { Typography } from '@material-ui/core';
import { fetchData } from './api'

import styles from './App.module.css';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });
  }

  render(){
    return (
      <div className={styles.container}>
        <Typography align="center" variant="h4" color="textSecondary">Chinese Virus Tracker</Typography>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    )
  }
}

export default App;
