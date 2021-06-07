import React from 'react';
import {Avatar} from '@material-ui/core';
import { Col, Row,Image } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Instagram from '../../assets/images/instagram.jpg'
import Github from '../../assets/images/1100822-middle.png'
import LinkedIn from '../../assets/images/linkedin-icon-2.svg'
import { Link } from 'react-router-dom';



export const Navbar = ( ) => {
    return (
        <Row className="Navbar">
            <Col >
            <Link to="/">Portfolio</Link>
            </Col>
            <Col>
                <ul className="d-flex">
                    <Link to="/resume" >Resume</Link>
                    <Link to="/projects" >Projects</Link>
                    <Link to="/contact" >Contact Me</Link>
                </ul>
            </Col>
            <Col>
                <ul className="d-flex float-right ">
                    <a href="https://www.instagram.com/flint.1993/"><Avatar src={Instagram} ></Avatar></a>
                    <a href="https://github.com/jcontreras5"><Avatar src={Github} ></Avatar></a>
                    <a href="https://www.linkedin.com/in/jonathan-contreras-98a150214/"><Avatar src={LinkedIn} ></Avatar></a>
                </ul>
            </Col>
        </Row>
    )
}