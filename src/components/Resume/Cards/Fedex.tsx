import React from 'react';
import Fed from '../../../assets/images/Fedex.jpg'
import { Image } from 'react-bootstrap';

export const Fedex = () => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <Image src={Fed} roundedCircle/>
      </div>
      <div className="flip-card-back">
        <h1>Fedex</h1>
        <h3>Loader/Package Handler</h3>
        <h4>Sep 2017-Mar 2018</h4>
        <p>•Processed 300 packages across 6 truck routes on a daily basis to ensure drivers able to effectively scan and prepare their vehicle for their delivery route by the beginning of their shift.
        <br/>  •Rerouted 50 labels daily to be sent back to sender due to bad label quality or damaged labelling.
        <br/>  •Obtained 99.9% route accuracy during the course of work timeline.
        </p>
      </div>
    </div>
  </div>
    );
  }