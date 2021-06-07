import React from 'react';
import CVSimg from '../../../assets/images/CVS.jpg'
import { Image } from 'react-bootstrap';

export const CVS = () => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
      <Image src={CVSimg} roundedCircle/>
      </div>
      <div className="flip-card-back">
        <h1>CVS</h1>
        <h3>IT Site Support</h3>
        <h4>Feb 2016-Aug 2016</h4>
        <p>
          <br/>• Processed 30 new onboards weekly and new hire builds, which involved hardware, software, token setup
          <br/>• Manned a 300 asset RAM upgrade project during course of employment 
          <br/>• Closed 50 HSPM tickets a weekly basis, which consisted of in persons and telephone troubleshooting of hardware/software issues
          <br/>• Inventoried 100,000 dollars worth of assets over the course of 6 months
        </p>
      </div>
    </div>
  </div>
    );
  }