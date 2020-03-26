import React from 'react';
import './WeatherContainer.css'

import WeatherItem from '../WeatherItem/WeatherItem';

function WeatherContainer(props) {
    return (
        <div className="Weather-container">
            <WeatherItem text={"Temperature"} value={props.data.main.temp}/>
            <WeatherItem text={"Description"} value={props.data.weather[0].main}/>
        </div>
    );
}


export default WeatherContainer;