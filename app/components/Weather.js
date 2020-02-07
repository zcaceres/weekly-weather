import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FAKE_WEATHER from '../sample/weather.json'
import WeatherCard from './WeatherCard'
import FlexboxRow from './FlexboxRow'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const NavBar = styled.div`
  z-index: 1;
  width: 100vw;
  background: antiquewhite;
  padding-left: 20px;
  font-size: 1.5rem;
  padding-top: 16px;
  padding-bottom: 16px;

  font-weight: bold;
  color: #333333;
`;

const isEven = num => num % 2 === 0;

export default function Weather({
  location
}) {
  if (!location) return <Redirect to="/" />;

  const {
    geometry,
    address_components
  } = location

  const dayObjects = FAKE_WEATHER.properties.periods
    .filter(({ number }) => !isEven(number));

  const nightObjects = FAKE_WEATHER.properties.periods
    .filter(({ number }) => isEven(number));

  const [readableAddress] = address_components
    .filter(component => component.types.includes('locality'))
    .map(comp => comp.short_name);

  const header = readableAddress || 'Your Weather';

  return (
    <Wrapper>
      <NavBar>{header}</NavBar>
      <FlexboxRow isScrollable>
        {dayObjects && dayObjects.map((dayWeather, index) => (
          <WeatherCard
            dayWeather={dayWeather}
            nightWeather={nightObjects[index]}
          />
        ))}
      </FlexboxRow>
    </Wrapper>
  );
}
