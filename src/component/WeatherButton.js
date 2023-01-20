import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='button-box'>
        <Button variant="success">Current Location</Button>{' '}
        <Button variant="success">Paris</Button>{' '}
        <Button variant="success">New York</Button>{' '}
    </div>
  )
}

export default WeatherButton