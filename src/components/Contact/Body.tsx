import React from 'react';
import { Grid, Input, makeStyles } from '@material-ui/core';
import { Button, Col, Row } from 'react-bootstrap';





export const Body = ( ) => {
    return (
        <Row className="Body">
            <div className="form">
            <form action="#">
                <div>
                    <label htmlFor="name">Name</label>
                    <Input name="name" placeholder="Name" />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <Input name="email" placeholder="email" />
                </div>

                <div >
                    <label>Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
                </div>
            
                <Button type='submit'>Submit</Button>
            </form>
            </div>
        </Row>
    )
}