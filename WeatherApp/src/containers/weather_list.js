import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        if (!cityData) {
            return null;
        }

        const name = cityData.city.name;
        //Changing from Kelvin to Celcius
        const temps = cityData.list.map(weather => {
            return weather.main.temp - 272.15;
        });
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humiditys = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name} text-align="center">
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humiditys} color="red" units="%"/></td>
            </tr>
        )
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                        <tr>
                            <th>City</th>
                            <th>Tempeture (C)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather }; // { weather } == { weather : weather}
}

export default connect(mapStateToProps)(WeatherList);