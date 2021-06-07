import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Navbar} from '../Navbar'
import { Container } from 'react-bootstrap';
import {Body} from './Body'


export const Projects = () => {
    return (
        <Container fluid>
            <Navbar></Navbar>
            <Body></Body>
        </Container>
            
        
    )
}