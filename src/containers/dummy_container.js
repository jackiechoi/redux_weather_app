import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dummy from '../components/dummy';

class DummyContainer extends Component {
  renderDummy(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273.15);
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const pressures = cityData.list.map(weather => weather.main.pressure)


    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Dummy data={temps} color="orange" units="C" />
        </td>
        <td>
          <Dummy data={humidities} color="green" units="hPa" />
        </td>
        <td>
          <Dummy data={pressures} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>dummy_City</th>
          <th>dummy_Temperature (C)</th>
          <th>dummy_Pressure (hPA)</th>
          <th>dummy_Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderDummy)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(DummyContainer);