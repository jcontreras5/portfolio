import React from 'react';
import Lawfirm from '../../../assets/images/NZA.jpg';
import { Image } from 'react-bootstrap';
import'../../../flip2.css'

export const NZA = () => {
  return (
    <div className="flip2-card">
    <div className="flip2-card-inner">
      <div className="flip2-card-front">
      <Image src={Lawfirm} fluid/>
      </div>
      <div className="flip2-card-back">
        <h1>NZA Lawfirm</h1>
        <h3>React Framework</h3>
        <h6>
          project consisted of trying to replicate a previous HTML/CSS using React Framework
        </h6>
        <a href="https://github.com/jcontreras5/nza-react">Click for Github</a>
      </div>
    </div>
  </div>
    );
  }