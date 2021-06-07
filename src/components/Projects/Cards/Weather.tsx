import React from 'react';
import Weather from '../../../assets/images//Weather.jpg'
import { Image } from 'react-bootstrap';
import'../../../flip2.css'

export const WeatherAPI = () => {
  return (
    <div className="flip2-card">
    <div className="flip2-card-inner">
      <div className="flip2-card-front">
        <Image src={Weather} fluid/>
      </div>
      <div className="flip2-card-back">
        <h1>Weather API</h1>
        <h3>Flask Framework</h3>
        <h6>
          Weather Website that had an input form that accepted input in the form of your city and outputs local weather
        </h6>
        <a href="https://github.com/jcontreras5/w7_weekend_project">Click for Github</a>
      </div>
    </div>
  </div>
    );
  }