import axios from 'axios';
import { IGetLocationsResponse, IGetWeatherResponse, IWeatherParams } from '../models';



interface ICityParams {
    query: string;
}

const BASE_URL = 'https://api.openweathermap.org'
const API_KEY = '88aab3d8f057b51b30e111d545b273f4'

const defaultParams = {
    lang: 'es',
    part: 'minutely,hourly,alerts',
    apikey: API_KEY,
    units: 'metric',
    limit: 5,
}

export const getWeather = async (params: IWeatherParams): Promise<IGetWeatherResponse> => {
    const { lat, lon } = params;
    const { lang, part, apikey, units } = defaultParams;

    try {
        const response = await axios.get(`${BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${lang}&units=${units}&exclude=${part}&appid=${apikey}`);
        return response.data;
    } catch (err) {
        let message;
        if (axios.isAxiosError(err) && err.response) {
            message = err.response.data.message;
        } else message = String(err);
        return { error: message }
    }
}

export const getLocations = async (params: ICityParams): Promise<IGetLocationsResponse> => {
    const { query} = params;
    const { apikey,limit } = defaultParams;

    try {
        const response = await axios.get(`${BASE_URL}/geo/1.0/direct?q=${query}&limit=${limit}&appid=${apikey}`);
        return {data: response.data};
    } catch (err) {
        let message;
        if (axios.isAxiosError(err) && err.response) {
            message = err.response.data.message;
        } else message = String(err);
        return { error: message }
    }
}




