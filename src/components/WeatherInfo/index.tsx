import { Box, Tabs, Tab } from '@mui/material';
import React, { useEffect } from 'react';
import CurrentDayInfo from '../CurrentDayInfo';
import DaysOfWeekInfo from '../DaysOfWeekInfo';
import TabPanel from '../TabPanel';

const current= {
    "dt": 1650773570,
    "sunrise": 1650710813,
    "sunset": 1650754917,
    "temp": 11.34,
    "feels_like": 10.98,
    "pressure": 1026,
    "humidity": 94,
    "dew_point": 10.41,
    "uvi": 0,
    "clouds": 75,
    "visibility": 10000,
    "wind_speed": 2.57,
    "wind_deg": 260,
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "muy nuboso",
            "icon": "04n"
        }
    ]
  }

const WeatherInfo = () => {

    const [value, setValue] = React.useState(1);


    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box sx={{ width: '100%' }} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="Tipo de vista" variant="fullWidth" indicatorColor="primary">
                    <Tab label="HOY" {...a11yProps(0)} />
                    <Tab label="SEMANA" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <CurrentDayInfo current={current}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DaysOfWeekInfo/>
            </TabPanel>
        </Box>
    )
}

export default WeatherInfo