import { createContext } from 'react'
import { IDataState } from './models'

export interface IDataContextProps {
    state: IDataState;
    setCity : (city: any) => void;
    setWeather : (weather: any) => void;
    setIsLoading : (isLoading: boolean) => void;
    setIsError : (isError: boolean) => void;
}

export const DataContext = createContext<IDataContextProps>({} as IDataContextProps)




