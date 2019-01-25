import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CompareArrows from '@material-ui/icons/CompareArrows';

const Header = () => (
  <div>
    <div className="appbarwrapper">
      <AppBar position="static">
        <Toolbar>
          <IconButton className="iconbuttonsyle" color="inherit" aria-label="Menu">
            <CompareArrows />
          </IconButton>
          <Typography variant="title" color="inherit" className="headertypoclass">
            React Timezone Converter
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  </div>
);

export default Header;
