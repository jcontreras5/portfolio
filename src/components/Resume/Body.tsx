import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';
import {Akamai} from './Cards/Akamai';
import {Aramark} from './Cards/Aramark';
import {CodingTemple} from './Cards/CodingTemple';
import {CVS} from './Cards/CVS'
import {Fedex} from './Cards/Fedex';
import {Walmart} from './Cards/Walmart';







export const Body = ( ) => {
    return (
        <div className="Body">
            <Row><h1>Resume</h1></Row>
            <Row>
                <Col>
                    <CodingTemple/>
                </Col>  
                <Col>
                    <Akamai/>
                </Col> 
                <Col>
                    <Fedex/>
                </Col>                       
            </Row>
            <Row>
                <Col>
                    <CVS/>
                </Col>    
                <Col>
                    <Aramark/>
                </Col>    
                <Col>
                    <Walmart/>
                </Col>      
            </Row>
            
        </div>
    )
}