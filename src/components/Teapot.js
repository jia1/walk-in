import React from 'react';
import {
  CardMedia,
  Grid
} from '@material-ui/core';

const Teapot = () => {
  return (
    <div className="Teapot">
      <Grid
        container
        direction="row"
        justify="space-evenly"
      >
        <Grid item
          xs={6}
        >
          <CardMedia
            component="img"
            src="https://http.cat/418"
          />
        </Grid>
        <Grid item
          xs={6}
        >
          <CardMedia
            component="img"
            src="https://http.cat/418"
          />
        </Grid>
        <Grid item
          xs={6}
        >
          <CardMedia
            component="img"
            src="https://http.cat/418"
          />
        </Grid>
        <Grid item
          xs={6}
        >
          <CardMedia
            component="img"
            src="https://http.cat/418"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Teapot;
