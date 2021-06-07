import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Navbar} from '../Navbar'
import { Container } from 'react-bootstrap';
import { Body } from './Body';

interface Props{
    title: string;
}

export const Home = ( props:Props) => {
    return (
        <Container fluid>
            <Navbar></Navbar>
            <Body></Body>
        
        </Container>
            
        
    )
}