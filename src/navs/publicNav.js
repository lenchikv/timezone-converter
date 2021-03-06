import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CompareArrows from '@material-ui/icons/CompareArrows';

import { NavLink } from 'react-router-dom';

export const publicNavs = [
  {
    url: '/home',
    name: 'Home',
    icon: <CompareArrows />,
  },
  // add new Nav links here as a json object, in this file the public navigations
];

export default () =>
  publicNavs.map(navItem => (
    <NavLink
      to={navItem.url}
      className="NavLinkItem"
      key={navItem.url}
      activeClassName="NavLinkItem-selected"
    >
      <List component="nav">
        <ListItem button>
          <ListItemIcon className="innernavitem"> {navItem.icon} </ListItemIcon>
          <ListItemText primary={navItem.name} className="innernavitem" color="black" />
        </ListItem>
      </List>
    </NavLink>
  ));
