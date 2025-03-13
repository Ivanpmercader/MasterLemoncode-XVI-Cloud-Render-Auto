import React, { PropsWithChildren } from 'react';
import {AppBar, Box, Button, Container, createTheme, ThemeProvider, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '@router/routes';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0c79d6',
      main: '#0b3d68',
      dark: '#67afec',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a4e2f4',
      main: '#4bd5ff',
      dark: '#1db5e2',
      contrastText: '#000',
    },
  },
});

const links = [{button: 'Home', route: routes.home}, {button: 'Github Members', route: routes.githubMembers.members}, { button: 'Rick & Morty',  route: routes.rickMortyApi.rickMortyCharacters}];

export const AppLayout: React.FC<PropsWithChildren> = ({children}) =>{
  return <>
    <ThemeProvider theme={theme}>
      <AppBar component="nav" position='sticky'>
        <Toolbar  sx={{gap: 2}}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
          >
            React Lab
          </Typography>
          <Box sx={{ display: { lg: 'flex' } }}>
            {links.map((link) => (
              <Button key={link.route} component={Link} to={link.route} variant="contained" disableElevation sx={{ color: theme.palette.primary.contrastText }}>
                {link.button}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{flex: 1}}>
        {children}
      </Container>
    </ThemeProvider>
  </>;
}