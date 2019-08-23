import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Typography
} from '@material-ui/core';

const Dashboard = ({ interviews, schedule }) => {
  return (
    <div className="Dashboard">
      <Box pt={2}>
        <Grid container
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <Grid item
            xs={12}
          >
            <CardMedia
              component="img"
              src="https://placekitten.com/800/300"
            />
          </Grid>
          <Grid item
            xs={6}
          >
            <Card>
              <CardContent>
                <Typography variant="h4">
                  # scheduled interviews
                </Typography>
                <br />
                <Typography variant="h2">
                  {Object.keys(schedule || []).length}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  component={Link} to={'/schedule'}
                >
                  View schedule
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item
            xs={6}
          >
            <Card>
              <CardContent>
                <Typography variant="h4">
                  # interviews near you
                </Typography>
                <br />
                <Typography variant="h2">
                  {Object.keys(interviews || []).length}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  component={Link} to={'/schedule'}
                >
                  Check them out
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
