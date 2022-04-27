import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DayInfo from '.';

const MOCK_DAY = {
    "dt": 1651042800,
    "sunrise": 1651019668,
    "sunset": 1651067881,
    "moonrise": 1651013640,
    "moonset": 1651055940,
    "moon_phase": 0.88,
    "temp": {
        "day": 29.39,
        "min": 22.03,
        "max": 31.81,
        "night": 25.55,
        "eve": 30.42,
        "morn": 24.07
    },
    "feels_like": {
        "day": 27.82,
        "night": 24.92,
        "eve": 28.71,
        "morn": 23.42
    },
    "pressure": 1010,
    "humidity": 22,
    "dew_point": 5.48,
    "wind_speed": 3,
    "wind_deg": 189,
    "wind_gust": 3.02,
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "cielo claro",
            "icon": "01d"
        }
    ],
    "clouds": 10,
    "pop": 0,
    "uvi": 11.16
}


describe('<DayInfo/>', () => {
    describe('when is loaded', () => {

        const props = {
            day: MOCK_DAY,
            index: 0
        }

        const {day, index} = props;

        it('should show data', () => {
            render(<DayInfo day={day} index={index}/>);   
            expect(screen.getByTestId('card-day')).toBeInTheDocument();
        })
        
        
    });

})