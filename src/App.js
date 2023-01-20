
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

//앱이 실행되자마자 현재 기반 위치의 날씨가 보인다 O
//날씨 정보에는 도씨, 섭씨, 최고, 최저, 날씨 상태가 보인다 O
//5개의 버튼이 있다(현재 위치, 다른 도시) O
//도시 버튼을 클릭하면 도시별 날씨가 나온다 O
//현재위치 버튼을 누르면 다시 현재위치 날씨가 나온다 O
//데이터를 들고 오는 동안에 로딩 스피너가 돈다 O

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const cities = ['seoul', 'paris', 'new york', 'tokyo'];
  
  const API_KEY = "81b77559169fef95202fa3524ab7dd72";

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => { //현재 위치
      let lat = position.coords.latitude; //현재 위도
      let lon = position.coords.longitude; //현재 경도
      // console.log('현재 위치 : ',lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) => { //현재 위치 날씨 데이터
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json(); // 현재 위치 날씨 API 가져오기
    setWeather(data); //weather state에 data 넣기
    setLoading(false);
  }

  const getWeatherByCity = async () => { //선택 위치 날씨 데이터
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log("city data? ",data);
    setWeather(data);
    setLoading(false);
  }

  useEffect(() => { // 앱이 실행되자 마자 실행됨
    if(city == "") { //city 유무에 따라 다르게 실행
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city])

  
  return (
    <div>
      {loading ? (
        <div className='container'>
        <ClipLoader
          color= "#f88c6b"
          loading={loading}
          size={150}
        /></div>
        ) : (
        <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity}/>
        </div>
          )}
    </div>
  );
}

export default App;
