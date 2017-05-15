import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    // const temp = cityData.list.map(weather => weather.main.temp);
    // const pressure = cityData.list.map(weather => weather.main.pressure);
    // const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPA)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);