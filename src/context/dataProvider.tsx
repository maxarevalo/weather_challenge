import { useReducer } from 'react'
import { IGetWeatherResponse, ILocations } from '../models';
import { DataContext } from './dataContext';
import { dataReducer } from './dataReducer';
import { IDataState } from './models';

interface IDataProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_DATA_STATE: IDataState = {
    weather: {},
    isLoading: false,
    isError: false,
    city: null,
}

export const DataProvider = ({ children }: IDataProviderProps) => {

    const [state, dispatch] = useReducer(dataReducer, INITIAL_DATA_STATE);

    const setCity = (city: ILocations | null)  => dispatch({ type: 'SET_CITY', payload: city });
    const setWeather = (weather: IGetWeatherResponse) => dispatch({ type: 'SET_WEATHER', payload: weather });
    const setIsLoading = (isLoading: boolean) => dispatch({ type: 'SET_IS_LOADING', payload: isLoading });
    const setIsError = (isError: boolean) => dispatch({ type: 'SET_IS_ERROR', payload: isError });


    return (
        <DataContext.Provider value={{ state, setCity, setWeather, setIsError, setIsLoading }}>
            {children}
        </DataContext.Provider>
    )
}