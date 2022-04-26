import { IGetWeatherResponse, ILocations } from "../models";

export interface IDataState {
    weather: IGetWeatherResponse,
    city: ILocations | null,
    isLoading: boolean,
    isError: boolean,
}