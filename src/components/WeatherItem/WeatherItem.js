import React from 'react';

function WeatherItem(props) {
    return (
        <div>
            {props.text}: {props.value}
        </div>
    );
}

export default WeatherItem;