
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WeatherInfo from '.'
import { DataContext, IDataContextProps } from '../../context/dataContext';
import { IDataState } from '../../context/models';
import MOCK_WEATHER from '../../assets/mocks/weather';
import MOCK_CITY from '../../assets/mocks/city';

describe('<WeatherInfo/>', () => {
    describe('when is loaded', () => {
        const STATE: IDataState = {
            weather: MOCK_WEATHER ,
            city: MOCK_CITY,
            isLoading: false,
            isError: false
        };

        const value: IDataContextProps = {
            state : STATE,
            setCity : jest.fn(),
            setWeather : jest.fn(),
            setIsLoading : jest.fn(),
            setIsError : jest.fn()
        }

        it('should render card-content', () => {
            render(<DataContext.Provider value={value}>
                <WeatherInfo />
            </DataContext.Provider >
        );
            expect(screen.getByTestId('weather-info-box')).toBeInTheDocument();
        })
        
    })
})