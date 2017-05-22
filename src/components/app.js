import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'
//import DummyContainer from '../containers/dummy_container'

export default class App extends Component {
  render () {
    return (
      <div>
        <SearchBar />
        <WeatherList />
        
      </div>
    );
  }
}
