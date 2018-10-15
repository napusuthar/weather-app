import React from 'react';
import './forecast.css'
import {Line} from 'react-chartjs-2'

const forecast = (props) => {

    const labelParser = () => {
        let dataSetDays = props
            .forecastDataset
            .map((obj) => {
                let dayId = new Date(obj.dt * 1000).getDay();

                switch (dayId) {
                    case 1:
                        return "Monday"

                    case 2:
                        return "Tuesday"

                    case 3:
                        return "Wednesday"

                    case 4:
                        return "Thursday"

                    case 5:
                        return "Friday"

                    case 6:
                        return "Saturday"

                    case 0:
                        return "Sunday"
                    default:
                        return null

                }
            })

        return dataSetDays;
    }

    const dataPointParser = (type) => {
        const dataPointsArray = props
            .forecastDataset
            .map((obj) => {
                return obj.temp[type];
            })
        return dataPointsArray
    }

    const data = {
        labels: labelParser(),
        datasets: [
            {
                label: "Max Temperature",
                borderColor: '#F44336',
                data: dataPointParser('max')
            }, {
                label: "Min Temperature",
                borderColor: '#4CAF50',
                data: dataPointParser('min')
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Seven Days Forecast',
            fontSize: 25
        },
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Temprature',
                        fontSize: 18
                    }
                }
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Days',
                        fontSize: 18

                    }
                }
            ]
        }

    }

    return (

        <div className="forecast hidden-xs hidden-sm">
            <div className="lineGraph">
                <Line data={data} options={options}/>
            </div>

        </div>
    )
};

export default forecast;