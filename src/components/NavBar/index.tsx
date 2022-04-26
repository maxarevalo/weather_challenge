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

     const { setCity } = useContext(DataContext);

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
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        {title}
                    </Typography>

                    <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            onClick={handleCleanData}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Inicio
                        </Button>

                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;