import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import Home from './components/Home';
import Weather from './components/Weather';

export default function Routes() {
  const [location, setLocation] = useState(null);

  return (
    <App>
      <Switch>
        <Route
          exact
          path={routes.HOME}
          component={() =>
            <Home
              location={location}
              onLocation={setLocation}
            />}
        />
        <Route path={routes.WEATHER} component={() => (
          <Weather location={location} />
        )} />
      </Switch>
    </App>
  );
}

