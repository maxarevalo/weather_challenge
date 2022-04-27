import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { DataContext } from '../../context/dataContext';

const NavBar = () => {

     const { setCity, state } = useContext(DataContext);
     const { city } = state;

    const handleCleanData = () => {
        setCity(null);
    };

    const title = 'CHALLENGE "WEATHER APP"'
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        data-testid="title"
                    >
                        {title}
                    </Typography>
                

                    {city && <Box sx={{ flexGrow: 1, justifyContent: 'end', display: 'flex' }}>

                        <Button data-testid="button"
                        variant="contained"
                            onClick={handleCleanData}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Inicio
                        </Button>

                    </Box>}


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;