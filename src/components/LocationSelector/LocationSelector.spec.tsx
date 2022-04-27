
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LocationSelector from '.'
import { DataContext, IDataContextProps } from '../../context/dataContext';
import { IDataState } from '../../context/models';
import MOCK_WEATHER from '../../assets/mocks/weather';
import MOCK_CITY from '../../assets/mocks/city';

describe('<LocationSelector/>', () => {
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

        it('should render search-button', () => {
            render(<DataContext.Provider value={value}>
                <LocationSelector />
            </DataContext.Provider >
        );
            expect(screen.getByTestId('search-button')).toBeInTheDocument();
        })
        it('should render title', () => {
            render(<DataContext.Provider value={value}>
                <LocationSelector />
            </DataContext.Provider >
        );
            expect(screen.getByTestId('geo-location-button')).toBeInTheDocument();
        })
        it('should change text in input', () => {
           render(<DataContext.Provider value={value}>
                <LocationSelector />
            </DataContext.Provider >
        );
           const input = screen.getByPlaceholderText('Ingrese una ciudad');  
           fireEvent.change(input, {target: {value: 'test'}})
           expect(input).toHaveValue("test");
        })
        
        
    })
})