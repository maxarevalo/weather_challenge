import {  Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IDaily } from '../../models';
import { getWeather } from '../../services/weather.service';
import DayInfo from '../DayInfo';

const params = {
    lat: -38.0023,
    lon: -57.5575
  }
  


const DaysOfWeekInfo = () => {
    const [daily, setDaily] = useState<IDaily[]>([]);

    useEffect(() => {
        (async () => getWeather(params))().then((data) => {
            const isError = data.error;
            isError ?
                console.log('error man') :
                setDaily(data?.daily || [])
        });


    }, [])


    return (
        <>
            <Typography variant="h4" align="center" sx={{ padding: '20px' }}>
                Días de la semana
            </Typography>
            <Grid container justifyContent="center" >
                {daily.map((day, index) => <DayInfo day={day} key={day.dt} index={index} />)}
                
            </Grid>
        </>

    )
}

export default DaysOfWeekInfo;