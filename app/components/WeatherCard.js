import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Wrapper=styled.div`
  padding: 25px 20px;
  background-color: #007aff;
  border-radius: 10px;
  width: 400px;

  img{
    float: right;
  }
`

const Temperature=styled.span`
  font-size: 4rem;
`



export default function WeatherCard({
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
  detailedForecast
  }){

  return(
    <Wrapper>
      <div>{moment(startTime).format('MMMM Do, YYYY')}</div>
      <Temperature>{temperature}<span>&#176;</span> {temperatureUnit}</Temperature>
      <img src={icon}/>
      <div>{name}</div>
      <div>{isDaytime}</div>
      <div>{windSpeed} {windDirection}</div>
      <div>{shortForecast} {detailedForecast}</div>
    </Wrapper>
  )
}
