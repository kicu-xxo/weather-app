import React from 'react'

const WeatherBox = ({weather}) => { //props에 있는 weather만 뽑아오기
    console.log('weather : ',weather);


  return (
    <div className='weather-box'>
        <h3>{weather?.name}</h3>
        <h1>{weather?.main.temp}C</h1>
        <div className='max-min-temp-box'>
        <div>최고 기온 : {weather?.main.temp_max}</div>
        <div>최저 기온 : {weather?.main.temp_min}</div>
        </div>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox