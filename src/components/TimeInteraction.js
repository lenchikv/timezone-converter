import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TimeSelector from './TimeSelector';
import TimezoneSelector from './TimezoneSelector'; // eslint-disable-line
import { getDefaultTimezone } from '../helpers/DateHelper';

const TimeInteraction = () => {
  const currentTimeZone = getDefaultTimezone();

  return (
    <Grid item xs={12} lg={6} md={6} className="grid-styling">
      <Typography variant="subheading" gutterBottom className="typography-styling">
        Local Timezone: {currentTimeZone}
      </Typography>
      <Grid item xs={12} lg={12} md={12}>
        <TimeSelector />
      </Grid>
      <Grid item xs={12} lg={12} md={12}>
        <TimezoneSelector />
      </Grid>
    </Grid>
  );
};

export default TimeInteraction;
