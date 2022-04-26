import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import LocationSelector from '../../components/LocationSelector';
import WeatherInfo from '../../components/WeatherInfo';
import { DataContext } from '../../context/dataContext';

function Home() {

  const { state } = useContext(DataContext);
  const { city } = state;

  return (
    <div>
      {city ? <WeatherInfo /> : <LocationSelector />}
    </div>


  );
}

export default Home;
