import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import CT from '../../../assets/images/ct-logo.png'



export const CodingTemple = () => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={CT} alt="Avatar" />
      </div>
      <div className="flip-card-back">
        <h1>Coding Temple</h1>
        <h3>Student</h3>
        <h4>Apr 2021-Present</h4>
        <p>• Learn Front and Backend Development
        <br/>• Python, Javascript, SQL, React, Flask
        </p>
      </div>
    </div>
  </div>
    );
  }
