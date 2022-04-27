import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CurrentDayInfo from '.'
import { DataContext, IDataContextProps } from '../../context/dataContext';
import { IDataState } from '../../context/models';
import MOCK_WEATHER from '../../assets/mocks/weather';
import MOCK_CITY from '../../assets/mocks/city';

describe('<CurrentDayInfo/>', () => {
    describe('when is loading', () => {
        const INITIAL_DATA_STATE: IDataState = {
            weather: {},
            city: null,
            isLoading: true,
            isError: false
        };

        const value: IDataContextProps = {
            state : INITIAL_DATA_STATE,
            setCity : jest.fn(),
            setWeather : jest.fn(),
            setIsLoading : jest.fn(),
            setIsError : jest.fn()
        }
        it('should render spinner', () => {
            render(<DataContext.Provider value={value}>
                <CurrentDayInfo />
            </DataContext.Provider >
        );
            expect(screen.getByTestId('spinner')).toBeInTheDocument();
        })
        
    });
    describe('when city is selected', () => {
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
                <CurrentDayInfo />
            </DataContext.Provider >
        );
            expect(screen.getByTestId('card-content')).toBeInTheDocument();
        })
        
    })
})