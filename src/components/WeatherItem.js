import React from 'react';

function WeatherItem(props) {
    return (
        <div>
            <p>Temperature: {props.data.main.temp}</p>
            <p>Description: {props.data.weather[0].main}</p>
        </div>
    );
}


export default WeatherItem;