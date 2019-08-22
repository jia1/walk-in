import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  IndexPage,
  MapPage,
  SchedulePage,
  HelpPage
} from './pages';

import {
  AppBar,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
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
              <img
                src="https://fontmeme.com/permalink/190822/08e84f1e1476f808b847b95ddc06e766.png"
                alt="Wálk IN: Gotta schedule 'em all'"
              />
            </Grid>
            <Grid item>
              <img
                src="https://fontmeme.com/permalink/190822/2c09ea9edf0fbf369ff4dd91174b921b.png"
                alt=""
              />
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
          <ListItem button component={Link} to="/schedule">
            <ListItemIcon><DateRangeIcon /></ListItemIcon>
            <ListItemText primary="Schedule" />
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
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/logout" component={IndexPage} />
        </Container>
      </main>
      </Router>
    </div>
  );
}

export default App;
