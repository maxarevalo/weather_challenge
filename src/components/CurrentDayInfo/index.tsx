
import { Grid, Typography, Card, CardContent, CircularProgress} from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../../context/dataContext';

const formatDate = (value: number | undefined) =>
 {
    if (value) {
    const output = new Date(value * 1000).toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    })
    return output  
    }
    return ''
}
    

const CurrentDayInfo = () => {

    const {state} = useContext(DataContext);
    const { city, isLoading} = state;
    const { current } = state.weather;

    const icon = current?.weather[0].icon || '';

    const img = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
        >
            {!isLoading ? <Card sx={{ width: '85%', textAlign: 'center' }}>
               <Typography component="p" variant="h3" >{city?.name}</Typography>
                <Typography component="p" variant="h6" >
                {current?.weather[0].description.toUpperCase()}
                </Typography>
                <img src={img} alt="weather" />
                <Typography component="h4" variant="h4" >
                   { current?.temp + 'ºC'}
                </Typography>

                <CardContent data-testid='card-content'>
                    <p><b>Sensación térmica:</b> {current?.feels_like} ºC</p>
                    <p><b>Humedad:</b> {current?.humidity} %</p>
                    <p><b>Viento:</b> {current?.wind_speed} m/s</p>
                    <p><b>Nubosidad:</b> {current?.clouds } %</p>
                    <p><b>Presión:</b> {current?.pressure} hPa</p>
                    <p><b>Indice UV:</b> {current?.uvi} UV</p>
                    <p><b>Amanecer:</b> {formatDate(current?.sunrise)}</p>
                    <p><b>Atardecer:</b> {formatDate(current?.sunset)}</p>
                </CardContent>
        

            </Card> : <CircularProgress data-testid='spinner' sx={{ paddingY: "5rem" }} />}
        </Grid>
    )
}

export default CurrentDayInfo;