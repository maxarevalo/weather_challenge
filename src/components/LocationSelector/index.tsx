import { Box, Button, CircularProgress, Grid, Paper, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/dataContext';
import { IGetLocationsResponse, IGetWeatherResponse, ILocations } from '../../models';
import { getLocations, getWeather } from '../../services/weather.service';


function LocationSelector() {


  const [textfield, setTextField] = useState<string>('')
  const { state, setCity, setWeather, setIsError, setIsLoading } = useContext(DataContext);
  const { isError, isLoading } = state;
  const [results, setResults] = useState<ILocations[]>([]);


  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextField(e.target.value)
  }

  const handleGetWeather = (location: ILocations) => {
    const { lat, lon } = location;
    setIsLoading(true)
    const getWeatherFetch = async () => getWeather({ lat, lon })
    getWeatherFetch()
      .then((data: IGetWeatherResponse) => {
        const error = data.error
        setIsError(error ? true : false)
        setWeather(data)
        setIsLoading(false)
      });
  }

  const handleSelectCity = (location: ILocations) => {
    handleGetWeather(location);
    setCity(location);

  }

  const handleClick = () => {
    setIsLoading(true)
    const getLocationFetch = async () => getLocations({ query: textfield })
    getLocationFetch()
      .then((data: IGetLocationsResponse) => {
        const error = data.error
        setIsError(error ? true : false)
        setResults(data?.data || [])
        setIsLoading(false)
      });
  }

  return (

    <div>
      <Grid container justifyContent="center" alignItems="center" direction="column" >

        <TextField

          sx={{ width: "80%", input: { textAlign: "center" }, marginBottom: "1rem", marginTop: "3rem" }}
          hiddenLabel
          placeholder="Ingrese una ciudad"
          id="filled-hidden-label-small"
          defaultValue={textfield}
          variant="outlined"
          onChange={handleChangeText}
        />
        <Button onClick={handleClick} sx={{ width: "80%", padding: "1em", marginBottom: "1rem" }} variant="contained" disabled={isLoading || !textfield.trim().length}>
          Buscar
        </Button>
        <Button onClick={handleClick} sx={{ width: "80%", padding: "1em" }} variant="contained" >
          Ubicación actual
        </Button>


      </Grid>

      <div>
        {isLoading
          ? <Grid container justifyContent="center" alignItems="center"><CircularProgress sx={{ paddingY: "5rem" }} /></Grid>
          : <Box sx={{ paddingY: '3rem' }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center" direction="column" >
              {results.length > 0 &&  <h2>Resultados:</h2>}
              {results.map((item: ILocations, index: number) => {
                return <Grid item key={index} onClick={() =>
                  handleSelectCity(item)}>
                  <Paper elevation={3} sx={{ paddingY: '1rem', paddingX: '2rem' }}>{item.name}, {item.state},{item.country}</Paper>
                </Grid>
              })}
            </Grid>
          </Box>
        }
        {isError && <Grid container spacing={3} justifyContent="center" alignItems="center" direction="column" >
          <h2>Ha ocurrido un error</h2>
          <p>Por favor intente más tarde</p>
        </Grid>}
      </div>


    </div>

  );
}

export default LocationSelector;
