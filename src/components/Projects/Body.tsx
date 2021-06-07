import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import { NZA } from './Cards/NZA';
import { WeatherAPI } from './Cards/Weather';




export const Body = ( ) => {
    return (
        <Row className="Body">
            <Col><NZA/></Col>
            <Col><WeatherAPI/></Col>
        </Row>
    )
}