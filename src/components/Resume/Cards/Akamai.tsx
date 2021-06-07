import React from 'react';
import Aka from '../../../assets/images/US020U.png'

export const Akamai = () => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Aka} alt="Avatar" />
      </div>
      <div className="flip-card-back">
        <h1>Akamai Technologies</h1>
        <h3>Data Center Field Tech</h3>
        <h4>Oct 2018-Present</h4>
        <p>•Single-handedly covered all deployment projects, deconstructions and maintenance issues at 3 datacenters, including Chicago’s carrier hotel and a large (~5000 server) POP. 
<br/>• Installation of 99% of Chicago’s external partner links (PNI, Transit and IXN)
<br/>• Installation and Turn-up of multiple new routers and wave systems
<br/>•Complete overhaul of IEN routers
<br/>• Nearly 2000 maintenance resolutions logged</p>
      </div>
    </div>
  </div>
    );
  }
