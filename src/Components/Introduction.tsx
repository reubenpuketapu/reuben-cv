import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import face from '../face.png'

import data from "../data.json" 
 

import "./Introduction.css"

function Introduction() {
    return (
        <Container fluid className="Header">
            <Row>
                <Col xs="2" className="ImageWrapper">
                    <img src={face} className="Image" alt="Me"></img>
                </Col>
                <Col className="Sideheader">
                    {data.introduction.summary}
                </Col>
            </Row>
        </Container>
    )
}

export default Introduction