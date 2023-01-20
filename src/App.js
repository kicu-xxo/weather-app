
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

//앱이 실행되자마자 현재 기반 위치의 날씨가 보인다
//날씨 정보에는 도씨, 섭씨, 화씨, 날씨 상태가 보인다
//5개의 버튼이 있다(현재 위치, 다른 도시)
//도시 버튼을 클릭하면 도시별 날씨가 나온다
//현재위치 버튼을 누르면 다시 현재위치 날씨가 나온다
//데이터를 들고 오는 동안에 로딩 스피너가 돈다

function App() {

  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; //현재 위도
      let lon = position.coords.longitude; //현재 경도
      // console.log('현재 위치 : ',lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const API_KEY = "81b77559169fef95202fa3524ab7dd72";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    let response = await fetch(url)
    let data = await response.json(); // 현재 위치 날씨 API 가져오기
    setWeather(data); //weather state에 data 넣기
  }

  useEffect(() => {
    getCurrentLocation()
  }, []) // 앱이 실행되자 마자 실행됨
  
  return (
    <div>
      <div className='container'>
      <WeatherBox weather={weather}/>
      <WeatherButton />
      </div>
    </div>
  );
}

export default App;
