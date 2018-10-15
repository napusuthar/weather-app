import React from 'react';
import './currentWeather.css';
import WeatherCard from '../CurrentWeather/weatherCard/weatherCard';
import WeatherList from '../CurrentWeather/weatherList/weatherList';

const currentWeather = (props) => {

    const getDayName = (dayId) => {
        switch (dayId) {
            case 1:
                return "Mon"

            case 2:
                return "Tue"

            case 3:
                return "Wed"

            case 4:
                return "Thu"

            case 5:
                return "Fri"

            case 6:
                return "Sat"

            case 0:
                return "Sun"
            default:
                return null

        }
    }

    const dateFormat = (dateUNIX) => {
        let date = new Date(dateUNIX * 1000);
        let dateString = getDayName(date.getDay())+"  "+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
        return dateString
    }

    const cardData = {
        date: dateFormat(props.weatherDataSet.list[0].dt),
        city: props.weatherDataSet.city.name,
        country: props.weatherDataSet.city.country,
        temp: props.weatherDataSet.list[0].temp.day,
        des: props.weatherDataSet.list[0].weather[0].main

    }

    const weatherListData = () =>{
        return props.weatherDataSet.list.slice(1,7).map((obj)=>{
             
            const data ={
            day : getDayName(new Date(obj.dt*1000).getDay()),
             maxTemp : obj.temp.max.toFixed(1),
             minTemp : obj.temp.min.toFixed(1),
             descr : obj.weather[0].main
            }
            
            

            return <WeatherList key={data.day} data={data}/>;
        });
        
    }


    return (
        <div className="currentWeather">
            
            
            <WeatherCard action={props.action} data={cardData}/>
            {weatherListData()}
           


        </div>
    )
};

export default currentWeather;