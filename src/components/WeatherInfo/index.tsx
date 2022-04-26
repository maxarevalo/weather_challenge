import { Box, Tabs, Tab } from '@mui/material';
import React from 'react';
import CurrentDayInfo from '../CurrentDayInfo';
import DaysOfWeekInfo from '../DaysOfWeekInfo';
import TabPanel from '../TabPanel';

const WeatherInfo = () => {

    const [value, setValue] = React.useState(0);


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
                <CurrentDayInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DaysOfWeekInfo  />
            </TabPanel>
        </Box>
    )
}

export default WeatherInfo