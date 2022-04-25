
import { Grid, Typography, Card, CardActions, CardContent, CardHeader} from '@mui/material';
import { ICurrent } from '../../models';



const formatDate = (value: number) => {
    const output = new Date(value * 1000).toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    })
    return output
}


interface ICurrentDayInfoProps {
    current: ICurrent;
}


const CurrentDayInfo = (props : ICurrentDayInfoProps ) => {

    const { current } = props;

    const img = 'https://openweathermap.org/img/wn/' + current.weather[0].icon + '@2x.png'

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
        >
            <Card sx={{ width: '85%', textAlign: 'center' }}>
                <CardHeader

                    title={<Typography variant="h3" >Nombre Ciudad</Typography>}
                />
                <Typography variant="h6" >
                {current.weather[0].description.toUpperCase()}
                </Typography>
                <img src={img} alt="weather" />
                <Typography variant="h4" >
                   { current.temp + 'ºC'}
                </Typography>

                <CardContent>
                    <p><b>Sensación térmica:</b> {current.feels_like} ºC</p>
                    <p><b>Humedad:</b> {current.humidity} %</p>
                    <p><b>Viento:</b> {current.wind_speed} m/s</p>
                    <p><b>Nubosidad:</b> {current.clouds } %</p>
                    <p><b>Presión:</b> {current.pressure} hPa</p>
                    <p><b>Indice UV</b>: {current.uvi} UV</p>
                    <p><b>Visibilidad:</b> {current.visibility/100} Km</p>
                    <p><b>Amanecer:</b> {formatDate(current.sunrise)}</p>
                    <p><b>Atardecer:</b> {formatDate(current.sunset)}</p>
                </CardContent>
        

            </Card>
        </Grid>
    )
}

export default CurrentDayInfo;