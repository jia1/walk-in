// WARNING: <br /> HACK HERE
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
  Typography
} from '@material-ui/core';

import utils from '../utils';

const Dashboard = ({ interviews, schedule }) => {
  const position = [1.2959, 103.8555]; // HACK
  return (
    <div className="Dashboard">
      <Box pt={2}>
        <Grid container
          spacing={2}
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
                  # nearby interview venues
                </Typography>
                <br />
                <Typography variant="h2">
                  {Object.values(interviews || []).filter((interview) => {
                    const d = utils.haversine(position[0], position[1], interview.latitude, interview.longitude);
                    return d <= 500; // Within 500 m
                  }).length}
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
