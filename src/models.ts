import { AxiosError } from "axios";

export interface IWeatherParams {
    lat: number;
    lon: number;
}

export interface ILocations {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state: string;
}
export interface IGetLocationsResponse {
    data?: ILocations[]
    error?: AxiosError;
}
export interface IGetWeatherResponse {
    current?: ICurrent;
    daily?: IDaily[];
    error?: AxiosError;
}

export interface ICurrent {
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
    wind_deg: number;
    wind_speed: number;
    weather: IWeather[];
}

export interface IDaily {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: IDailyTemp;
    feels_like: IDailyTemp;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    visibility?: number;
    wind_speed: number;
    weather: IWeather[];
    pop: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    wind_deg: number;
    wind_gust: number;
    clouds: number;
    rain: number;
}

interface IDailyTemp {
    day: number;
    max?: number;
    min?: number;
    night: number;
    eve: number;
    morn: number;
}

interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

