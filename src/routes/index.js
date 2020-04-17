import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import Delivery from '../pages/Delivery';
import DeliveryForm from '~/pages/Delivery/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/delivery" component={Delivery} isPrivate />
      <Route path="/delivery/form" component={DeliveryForm} isPrivate />
    </Switch>
  );
}
