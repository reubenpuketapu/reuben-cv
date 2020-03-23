import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import face from '../face.png'

import "./Introduction.css"

function Introduction() {
    return (
        <Container fluid className="Header">
            <Row>
                <Col xs="2" className="ImageWrapper">
                    <img src={face} className="Image" alt="Me"></img>
                </Col>
                <Col className="Sideheader">
                    Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. 
                    Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante tincidunt tempus. 
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. 
                    Duis leo. Sed fringilla mauris sit amet nibh.
                </Col>
            </Row>
        </Container>
    )
}

export default Introduction