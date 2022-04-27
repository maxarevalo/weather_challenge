import { IGetWeatherResponse } from "../../models";

const MOCK_WEATHER: IGetWeatherResponse = {
    "current": {
        "dt": 1651029061,
        "sunrise": 1651019668,
        "sunset": 1651067881,
        "temp": 25.86,
        "feels_like": 25.26,
        "pressure": 1011,
        "humidity": 29,
        "dew_point": 6.49,
        "uvi": 2.07,
        "clouds": 12,
        "visibility": 10000,
        "wind_speed": 0.43,
        "wind_deg": 259,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "algo de nubes",
                "icon": "02d"
            }
        ]
    },
    "daily": [
        {
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
        },
        {
            "dt": 1651129200,
            "sunrise": 1651106005,
            "sunset": 1651154327,
            "moonrise": 1651101720,
            "moonset": 1651145940,
            "moon_phase": 0.92,
            "temp": {
                "day": 32.15,
                "min": 23.21,
                "max": 33.14,
                "night": 27.06,
                "eve": 31.68,
                "morn": 23.23
            },
            "feels_like": {
                "day": 29.95,
                "night": 26.24,
                "eve": 29.64,
                "morn": 22.47
            },
            "pressure": 1008,
            "humidity": 16,
            "dew_point": 1.83,
            "wind_speed": 4.45,
            "wind_deg": 184,
            "wind_gust": 4,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "nubes",
                    "icon": "04d"
                }
            ],
            "clouds": 100,
            "pop": 0.04,
            "uvi": 9.95
        },
        {
            "dt": 1651215600,
            "sunrise": 1651192342,
            "sunset": 1651240774,
            "moonrise": 1651189740,
            "moonset": 1651235940,
            "moon_phase": 0.95,
            "temp": {
                "day": 33.09,
                "min": 24.15,
                "max": 34.3,
                "night": 26.34,
                "eve": 32.86,
                "morn": 24.34
            },
            "feels_like": {
                "day": 30.76,
                "night": 26.34,
                "eve": 30.55,
                "morn": 23.59
            },
            "pressure": 1008,
            "humidity": 15,
            "dew_point": 1.42,
            "wind_speed": 3.75,
            "wind_deg": 181,
            "wind_gust": 5.82,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "muy nuboso",
                    "icon": "04d"
                }
            ],
            "clouds": 59,
            "pop": 0.05,
            "uvi": 10.42
        },
        {
            "dt": 1651302000,
            "sunrise": 1651278680,
            "sunset": 1651327221,
            "moonrise": 1651277760,
            "moonset": 1651325880,
            "moon_phase": 0.98,
            "temp": {
                "day": 32.35,
                "min": 23.94,
                "max": 34.02,
                "night": 27.01,
                "eve": 33.57,
                "morn": 23.94
            },
            "feels_like": {
                "day": 30.16,
                "night": 26.25,
                "eve": 31.2,
                "morn": 23.09
            },
            "pressure": 1006,
            "humidity": 17,
            "dew_point": 2.54,
            "wind_speed": 4.04,
            "wind_deg": 191,
            "wind_gust": 3.77,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "cielo claro",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 11.86
        },
        {
            "dt": 1651388400,
            "sunrise": 1651365020,
            "sunset": 1651413668,
            "moonrise": 1651365900,
            "moonset": 1651415880,
            "moon_phase": 0,
            "temp": {
                "day": 33.21,
                "min": 25.03,
                "max": 34.93,
                "night": 27.82,
                "eve": 34.33,
                "morn": 25.03
            },
            "feels_like": {
                "day": 30.91,
                "night": 26.7,
                "eve": 31.87,
                "morn": 24.24
            },
            "pressure": 1003,
            "humidity": 16,
            "dew_point": 2.53,
            "wind_speed": 3.65,
            "wind_deg": 177,
            "wind_gust": 2.9,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "cielo claro",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0.07,
            "uvi": 11.96
        },
        {
            "dt": 1651474800,
            "sunrise": 1651451360,
            "sunset": 1651500115,
            "moonrise": 1651454160,
            "moonset": 1651505820,
            "moon_phase": 0.05,
            "temp": {
                "day": 33.99,
                "min": 25.89,
                "max": 35.77,
                "night": 28.27,
                "eve": 35.09,
                "morn": 25.89
            },
            "feels_like": {
                "day": 31.55,
                "night": 26.89,
                "eve": 32.44,
                "morn": 25.08
            },
            "pressure": 1002,
            "humidity": 14,
            "dew_point": 1.48,
            "wind_speed": 5.59,
            "wind_deg": 168,
            "wind_gust": 6.9,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "cielo claro",
                    "icon": "01d"
                }
            ],
            "clouds": 3,
            "pop": 0,
            "uvi": 12
        },
        {
            "dt": 1651561200,
            "sunrise": 1651537702,
            "sunset": 1651586562,
            "moonrise": 1651542720,
            "moonset": 1651595760,
            "moon_phase": 0.08,
            "temp": {
                "day": 31.93,
                "min": 24.83,
                "max": 33.67,
                "night": 25.48,
                "eve": 32.78,
                "morn": 24.83
            },
            "feels_like": {
                "day": 29.86,
                "night": 24.95,
                "eve": 30.52,
                "morn": 24.07
            },
            "pressure": 1004,
            "humidity": 19,
            "dew_point": 3.57,
            "wind_speed": 5.79,
            "wind_deg": 142,
            "wind_gust": 7.66,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "muy nuboso",
                    "icon": "04d"
                }
            ],
            "clouds": 80,
            "pop": 0.09,
            "uvi": 12
        },
        {
            "dt": 1651647600,
            "sunrise": 1651624045,
            "sunset": 1651673009,
            "moonrise": 1651631580,
            "moonset": 1651685520,
            "moon_phase": 0.11,
            "temp": {
                "day": 31.34,
                "min": 19.3,
                "max": 32.8,
                "night": 23.3,
                "eve": 19.3,
                "morn": 23.55
            },
            "feels_like": {
                "day": 29.38,
                "night": 22.63,
                "eve": 18.85,
                "morn": 22.82
            },
            "pressure": 1005,
            "humidity": 20,
            "dew_point": 3.92,
            "wind_speed": 5.7,
            "wind_deg": 15,
            "wind_gust": 6.72,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "lluvia moderada",
                    "icon": "10d"
                }
            ],
            "clouds": 80,
            "pop": 0.61,
            "rain": 5.12,
            "uvi": 12
        }
    ]
}

export default MOCK_WEATHER;
