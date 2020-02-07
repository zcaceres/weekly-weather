import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Forecast from './Forecast';

export default function WeatherCard({
  dayWeather,
  nightWeather
}) {
  const [isNight, setIsNight] = useState(false);

  function toggleForecast() {
    setIsNight(!isNight);
  }

  return (
    <>
      {isNight ?
        <Forecast
          {...nightWeather}
          isNight={isNight}
          onToggleForecast={toggleForecast}
        />
        :
        <Forecast
          {...dayWeather}
          isNight={isNight}
          onToggleForecast={toggleForecast}
        />}
    </>
  );
}
