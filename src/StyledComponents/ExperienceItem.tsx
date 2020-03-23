import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import "./ExperienceItem.css"

type ExperienceItem = {
    title: string,
    companyInfo: string,
    paragraph: string
}

const ExperienceItem: React.SFC<ExperienceItem> = (props) => {
    return (
        <Container className="Container" fluid>
            <Row>
                <Col xs="4">
                    <b>{props.title}</b> 
                </Col>
                <Col>
                    {props.companyInfo}
                </Col>
            </Row>
            <Row className="Experience">
                {props.paragraph}
            </Row>
        </Container>
    )
}

export default ExperienceItem