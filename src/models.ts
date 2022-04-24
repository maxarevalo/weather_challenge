export interface IWeatherParams {
    lat: number;
    lon: number;
}

export interface IGetWeatherResponse {
    current: ICurrent;
    daily: IDaily[];
}

interface ICurrent {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    weather: IWeather[];
}

interface IDaily {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: IDailyTemp;
    feels_like: IDailyTemp;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    visibility: number;
    wind_speed: number;
    weather: IWeather[];
    pop: number;
}

interface IDailyTemp {
    day: number;
}

interface IWeather {
    description: string;
    icon: string;
}

