import React from 'react';
import './weatherCard.css'

const weatherCard = (props) => {

    let cityInput;



    const setCity = () => {
        props.action(cityInput.value)
        cityInput.value = ""
    }

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
        <div>
            <div className="dateDisplay">
                <strong>{props.data.date}</strong>
                <input
                    ref={el => cityInput = el}
                    type="text"
                    name="FirstName"
                    placeholder="Enter City Name"/>
                <button onClick={setCity}>Enter</button>
            </div>
            <div className="weatherCard">
                <div className="weatherIcon">
                    <img className="weatherIconImage" src={setIcon(props.data.des)} alt=""/>

                </div>

                <div className="weatherData">
                    <h3>{props.data.city}</h3>
                    <p>{props.data.country}</p>
                    <h3>{props.data.temp}&#176; C
                    </h3>
                </div>
            </div>
        </div>
    )
};

export default weatherCard;