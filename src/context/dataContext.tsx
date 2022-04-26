import { createContext } from 'react'
import { IGetWeatherResponse, ILocations } from '../models'
import { IDataState } from './models'

export interface IDataContextProps {
    state: IDataState;
    setCity : (city: ILocations | null) => void;
    setWeather : (weather: IGetWeatherResponse) => void;
    setIsLoading : (isLoading: boolean) => void;
    setIsError : (isError: boolean) => void;
}

export const DataContext = createContext<IDataContextProps>({} as IDataContextProps)




