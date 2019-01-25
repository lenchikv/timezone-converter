import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <Fragment>
        <Header />
        <Component {...props} />
      </Fragment>
    )}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
export default PublicRoute;
