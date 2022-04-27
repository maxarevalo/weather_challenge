import { Card, CardContent, Grid, styled } from '@mui/material';
import { IDaily } from '../../models';

const CardContentCustomPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 16px;
  }
`);

interface IDayInfoProp {
    day: IDaily;
    index: number;
}

const getDay = (days: number) => {
    let date = new Date();
    date.setDate(date.getDate() + days + 1);
    const weekDay = date.toLocaleString('es-AR', { weekday: 'long' })
    return days === 0 ? 'mañana' : weekDay
}

const getIcon = (icon: string): string => {
    return 'https://openweathermap.org/img/wn/' + icon + '@2x.png'
}

const DayInfo = (props: IDayInfoProp) => {

    const { day, index } = props;

    const min = Number(day.temp.min).toFixed(0)
    const max = Number(day.temp.max).toFixed(0)
    const rain = Math.round(day.rain || 0).toFixed(0) 

    return (
        <Card data-testid="card-day" sx={{ width: '95%', marginBottom: '10px' }}>
            <CardContentCustomPadding >
                <Grid
                    container alignItems="center" sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={3} sx={{ textTransform: 'capitalize' }}>
                        {getDay(index)}
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <img src={getIcon(day.weather[0].icon)} alt="weather" />
                    </Grid>
                    <Grid item xs={6} md={3} >
                        <b>Prob. Lluvia:</b>{rain }%
                    </Grid>
                    <Grid item xs={6} md={3} >
                        {min}ºC / {max}ºC
                    </Grid>

                </Grid>
            </CardContentCustomPadding>
        </Card>
    )
}

export default DayInfo;