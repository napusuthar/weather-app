import React from 'react';
import './weatherList.css'

const weatherList = (props) => {

    const setIcon = (type) => {
        console.log(type)
        switch (type) {
            case "Clear":
                return require('../../../../assets/weatherIcons/clear.png')

            case "Rain":
                return require('../../../../assets/weatherIcons/rain.png')

            case "Clouds":
                return require('../../../../assets/weatherIcons/clouds.png')

            case "Snow":
                return require('../../../../assets/weatherIcons/snow.png')
            default:
                return require('../../../../assets/weatherIcons/snow.png')
        }
    }

    return (
        <div className="weatherList">
            <div>{props.data.day}</div>
            <div>{props.data.maxTemp}&#176; C / {props.data.minTemp}&#176; C </div>
            <div>
                <img className="weatherListIcon" src={setIcon(props.data.descr)} alt=""/>
            </div>
            <div>{props.data.descr}</div>
        </div>
    )
}

export default weatherList;