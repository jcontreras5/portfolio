import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import '../../profile.css'

export const Body = ( ) => {
    return (
        <Row className="Body ">
            <Col className="item d-flex justify-content-center">
                <div className="box">
                    <div className="cover">
                        <h3 className="name">Jonathan Contreras</h3>
                        <p className="title">Student</p>
                    <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                </div>
            </div>
            </Col>
        </Row>
    )
}