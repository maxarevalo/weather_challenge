import { IGetWeatherResponse, ILocations } from "../models"
import { IDataState } from "./models"


type IDataAction =
    | { type: 'SET_WEATHER', payload: IGetWeatherResponse }
    | { type: 'SET_CITY', payload: ILocations | null }
    | { type: 'SET_IS_LOADING', payload: boolean }
    | { type: 'SET_IS_ERROR', payload: boolean }


export const dataReducer = (state: IDataState, action: IDataAction) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weather: action.payload
            }
        case 'SET_CITY':
            return {
                ...state,
                city: action.payload
            }
        case 'SET_IS_ERROR':
            return {
                ...state,
                isError: action.payload
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}