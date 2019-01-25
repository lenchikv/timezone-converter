import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Converter from '../components/Converter';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRouter';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={Converter} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
