import {  Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import DayInfo from '../DayInfo';




const DaysOfWeekInfo = () => {

    const {state} = useContext(DataContext);
    const { daily} = state.weather;

    return (
        <>
            <Typography variant="h4" component="h4" align="center" sx={{ padding: '20px' }}>
                Próximos dias
            </Typography>
            <Grid container justifyContent="center" >
                {daily?.map((day, index) => <DayInfo day={day} key={day.dt} index={index} />)}
                
            </Grid>
        </>
    )
}

export default DaysOfWeekInfo;