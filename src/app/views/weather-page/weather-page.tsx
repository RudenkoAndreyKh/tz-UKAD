import React, { useEffect, useState } from 'react';
import { getWeather } from '../../services/weather.service';
import { DayWeather } from '../../shared/interfaces/day-weather';
import moment from 'moment';
import './styles.scss';
import { useHistory } from 'react-router-dom';
// import MostlySunny from '../../assets/Mostly Sunny.png';
// import Sunny from '../../assets/Sunny.png';
// import PartlyCloudy from '../../assets/Partly Cloudy.png';
// import ScatteredShowers from '../../assets/Scattered Showers.png';

const MostlySunny = require('../../assets/Mostly Sunny.png');
const Sunny = require('../../assets/Sunny.png');
const PartlyCloudy = require('../../assets/Partly Cloudy.png');
const ScatteredShowers = require('../../assets/Scattered Showers.png');
const MostlyCloudy = require('../../assets/Mostly Cloudy.png');

enum WeatherTypes {
    'Sunny' = 'Sunny',
    'Mostly Sunny' = 'MostlySunny',
    'Partly Cloudy' = 'PartlyCloudy',
    'Scattered Showers' = 'ScatteredShowers',
    'Mostly Cloudy' = 'MostlyCloudy'
}

const WeatherPage = () => {
    const [currentObservation, setCurrentObservation] = useState<DayWeather[]>([]);
    const history = useHistory();

    useEffect(() => {
        const request = getWeather();
        request.get(
            'https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=49.990101&lon=36.230301&format=json',
            '',
            '',
            (err, data: any, result) => {
                if (err) {
                    console.log(err);
                } else {
                    setCurrentObservation(JSON.parse(data).forecasts)
                }
            }
        );
    }, []);

    const logout = () => {
        localStorage.clear();
        history.push('/login');
    }

    return (
        <div className="weather-page">
            <div className="logout-container">
                <button onClick={logout} className="logout">Logout</button>
            </div>
            <div className="weather-container">
                {
                    currentObservation.map((item: DayWeather, index) => (
                        index === 0 ? <>
                            <div className="weather-card">
                                <div className="card-header">
                                    <span>Today</span>
                                    <span>{moment(item.date, 'X').format('DD.MM')}</span>
                                </div>
                                <div className="card-content">
                                    <img src={eval(WeatherTypes[item.text])} alt="" />
                                    <div className="temp">
                                        {((item.high - 32) * 5 / 9).toFixed(0)}°
                                        <span>High</span>
                                    </div>
                                    <span className="weather-text">
                                        {item.text}
                                    </span>
                                </div>
                            </div>
                            <div className="weather-card">
                                <div className="card-header">
                                    <span>Evening</span>
                                    <span>{moment(item.date, 'X').format('DD.MM')}</span>
                                </div>
                                <div className="card-content">
                                    <img src={eval(WeatherTypes[item.text])} alt="" />
                                    <div className="temp">
                                        {((item.low - 32) * 5 / 9).toFixed(0)}°
                                        <span>Low</span>
                                    </div>
                                    <span className="weather-text">
                                        {item.text}
                                    </span>
                                </div>
                            </div>
                        </> : <div className="weather-card" key={item.date}>
                                <div className="card-header">
                                    <span>{item.day}</span>
                                    <span>{moment(item.date, 'X').format('DD.MM')}</span>
                                </div>
                                <div className="card-content">
                                    <img src={eval(WeatherTypes[item.text])} alt="" />
                                    <div className="temp">
                                        {((item.high - 32) * 5 / 9).toFixed(0)}°
                                        <span>/{((item.low - 32) * 5 / 9).toFixed(0)}°</span>
                                    </div>
                                    <span className="weather-text">
                                        {item.text}
                                    </span>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WeatherPage;