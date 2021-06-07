import React from 'react';
import Ara from '../../../assets/images/aramark.jpg'
import { Image } from 'react-bootstrap';

export const Aramark = () => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <Image src={Ara} roundedCircle/>
      </div>
      <div className="flip-card-back">
        <h1>Aramark</h1>
        <h3>Food and Beverage Specialist</h3>
        <h4>Apr 2014-Jul 2015</h4>
        <p>• Open, stock, and close 3 micro kitchens across 2 floors for Motorola offices at the Merchandise Mart that serve 3,000 Motorola employees on a daily basis 
        <br/>• Unload, transport, and inventory $10,000 worth of food and beverage to supply contracting company
        <br/>• Collaborate with a 4 person team to audit inventory across stock room and 6 micro kitchens weekly to optimize efficiency and prevent overstock and product waste
        </p>
      </div>
    </div>
  </div>
    );
  }