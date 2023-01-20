import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  // console.log('cities?', cities);

  return (
    <div className='button-box'>
        <Button variant="success">Current Location</Button>
        
        {cities.map((item, index) => ( //cities 배열에 있는 item으로 button 만들기
          <Button variant="success" 
          key={index} 
          onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton