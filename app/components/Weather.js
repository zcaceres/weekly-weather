import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default function Weather({
  location
}) {
  if (!location) return <Redirect to="/" />;

  return (
    <div>
      <h2>Weather</h2>
      {location.lat, location.lng}
      <Link to="/">Go Home</Link>
    </div>
  );
}
