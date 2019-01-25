import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TimeInteraction from './TimeInteraction';
import TimeOutput from './TimeOutput';

const Converter = () => (
  <div className="contact-page-wrapper">
    <Grid container spacing={24} justify="center">
      <Grid item xs={12} md={10} className="grid-styling">
        <Paper className="contact-page-paper">
          <Typography variant="display1" gutterBottom className="typography-styling">
            Converter
          </Typography>
          <Grid container spacing={24}>
            <TimeInteraction />
            <TimeOutput />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default Converter;
