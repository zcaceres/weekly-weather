import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import FlexboxRow from './FlexboxRow';

// Sunny Icon
// Partly Sunny
// Snowy
import RainIcon from './RainIcon';
import WindIcon from './WindIcon';

// SunnyBg
// RainyBG
// SnowyBG
import CloudyBG from '../assets/img/cloudy.jpg';
import SunnyBG from '../assets/img/partly-sunny.jpg';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  color: antiquewhite;
  padding: 25px 20px;
  border-radius: 10px;
  width: 400px;
  height: 220px;
  margin: 20px;
  cursor: pointer;

  user-select: none;
  -moz-user-select: none;

  * {
    position: relative;
  }

  *:not(.BackgroundLayer) {
    z-index: 2;

    ${({ isNight }) => isNight && css`
      color: lightgray;
    `}
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 2px;
  }

  h4 {
    margin: 0;
    font-size: 0.875rem;
  }

  transition: all 300ms;

  :hover {
    box-shadow: 3px 10px 10px #888;
    transform: translateY(-10px);
  }
`;

const Temperature = styled.span`
  font-size: 6rem;
  font-weight: bold;

  span {
    font-size: 6rem;
  }
`;

const BackgroundImage = styled.img.attrs({
  className: 'BackgroundLayer'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  z-index: 0;

  @keyframes move {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  & {
    animation-duration: 60s;
    animation-name: move;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`

const BackgroundOverlay = styled.div.attrs({
  className: 'BackgroundLayer'
})`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;

  background-color: #007aff;

  ${({ isNight }) => isNight && css`
    background-color: #333333;
    opacity: 0.8;
  `}
`

const StyledWindIcon = styled(WindIcon)`
  fill: antiquewhite;

  float: right;
  margin-top: 24px;
  margin-right: 16px;
  height: 80px;

  ${({ isNight }) => isNight && css`
    fill: lightgray;
  `}
`

export default function Forecast({
  name,
  startTime,
  number,
  isDaytime,
  temperature,
  temperatureUnit,
  windSpeed,
  windDirection,
  icon,
  shortForecast,
  detailedForecast,
  onToggleForecast,
  isNight
}) {
  const [isDetailedForecastVisible, setIsDetailedForecastVisible] = useState(false);

  return (
    <Wrapper
      isNight={isNight}
      onClick={onToggleForecast}
    >
      <h2>{name}</h2>
      <Temperature>
        {temperature}
        &#176;
      </Temperature>

      <StyledWindIcon isNight={isNight} />
      {/* <RainIcon /> */}

      <div>{isDaytime}</div>
      <h3>{shortForecast}</h3>
      <h4>{windSpeed} {windDirection}</h4>

      <BackgroundOverlay isNight={isNight} />
      <BackgroundImage src={SunnyBG} />
    </Wrapper>
  );
}
