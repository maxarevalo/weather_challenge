
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '.'
import { DataContext, IDataContextProps } from '../../context/dataContext';
import { IDataState } from '../../context/models';
import MOCK_WEATHER from '../../assets/mocks/weather';
import MOCK_CITY from '../../assets/mocks/city';

describe('<NavBar/>', () => {
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

        it('should render button', () => {
            render(<DataContext.Provider value={value}>
                <NavBar />
            </DataContext.Provider >
        );
            expect(screen.getByTestId('button')).toBeInTheDocument();
        })
        it('should render title', () => {
            render(<DataContext.Provider value={value}>
                <NavBar />
            </DataContext.Provider >
        );
            expect(screen.getByTestId('title')).toBeInTheDocument();
        })
        
    })
})