import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  IndexPage,
  MapPage
} from './pages';

import {
  AppBar,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  Home as HomeIcon,
  Place as PlaceIcon
} from '@material-ui/icons';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="fixed" className="AppBar">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Wålk IN
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
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
      </Drawer>
      <main className="Content">
        <Toolbar />
        <Container maxWidth="xl">
          <Route exact path="/" component={IndexPage} />
          <Route path="/map" component={MapPage} />
        </Container>
      </main>
      </Router>
    </div>
  );
}

export default App;
