import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  IndexPage,
  MapPage,
  AppointmentsPage
} from './pages';

import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  Home as HomeIcon,
  Place as PlaceIcon,
  DateRange as DateRangeIcon,
  Help as HelpIcon,
  ExitToApp as ExitToAppIcon
} from '@material-ui/icons';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
      <AppBar position="fixed" className="AppBar">
        <Toolbar>
          <Grid container
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h6" noWrap>
                Wålk IN
              </Typography>
            </Grid>
            <Grid item>
              <div>
                <Button color="inherit" component={Link} to="/logout">
                  Logout
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className="Drawer"
        variant="permanent"
        classes={{
          paper: "DrawerPaper",
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Index" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/map">
            <ListItemIcon><PlaceIcon /></ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/appointments">
            <ListItemIcon><DateRangeIcon /></ListItemIcon>
            <ListItemText primary="Appointments" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/help">
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/logout">
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main className="Content">
        <Toolbar />
        <Container maxWidth="xl">
          <Route exact path="/" component={IndexPage} />
          <Route path="/map" component={MapPage} />
          <Route path="/appointments" component={AppointmentsPage} />
          <Route path="/help" component={IndexPage} />
          <Route path="/logout" component={IndexPage} />
        </Container>
      </main>
      </Router>
    </div>
  );
}

export default App;
