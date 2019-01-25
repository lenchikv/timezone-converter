import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TimezonesOutput from './TimezonesOutput'; // eslint-disable-line

const TimeOutput = () => (
  <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
    <Typography variant="subheading" gutterBottom style={{ padding: 15 }}>
      Converted Timezones
    </Typography>
    <TimezonesOutput />
  </Grid>
);

export default TimeOutput;
