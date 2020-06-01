import React from 'react';
import CurrentWeather from '../CurrentWeather/currentWeather'
import Forecast from '../Forecast/forecast'
import './mainDisplay.css'

class MainDisplay extends React.Component {

    state = null

    updateCity = (cityName="mumbai") => {
        console.log(cityName)
        fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&units=metric&c' +
                    'nt=7&appid=1ee34fc6bb832d53cee04386b9143577')
            .then(res => res.json())
            .then(res => {
                this.setState(res)
            })
    }


    componentDidMount() {
        this.updateCity()
    }

   

    render() {
        if (this.state != null) {
            return (
                    <div className="MainDisp">
                        <CurrentWeather action={this.updateCity} weatherDataSet={this.state}/>
                        
                        <Forecast forecastDataset={this.state.list}/>
                    </div>
            )
        } else {
            return <h1>Loading...</h1>
        }
    }

};

export default MainDisplay;