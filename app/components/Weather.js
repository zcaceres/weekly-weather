import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FAKE_WEATHER from '../sample/weather.json'
import WeatherCard from './WeatherCard'

export default function Weather({
  location,
}) {
  if (!location) return <Redirect to="/" />;

  const weather = FAKE_WEATHER.properties.periods[0]

  return (
    <div>
      <h2>Weather</h2>
        <WeatherCard {...weather}/>
      <Link to="/">Go Home</Link>
    </div>
  );
}
