import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import "./Header.css"

function RenderSidepanel() {
    return (
        <>
            <div>
                number: +64 211763116
            </div>
            <div>
                email: reuben.puketapu@gmail.com
            </div>
            <div>
                site: reubenpuketapu.com
            </div>
                
        </>
        
    )
}

function Header() {
    return (
        <Container fluid className="Header">
            <Row>
                <Col xs="8" className="Mainheader">REUBEN PUKETAPU</Col>
                <Col className="Sideheader">{RenderSidepanel()}</Col>
            </Row>
            <Row>
                <Col className="Subheader">
                    Software Engineer
                </Col>
            </Row>
        </Container>
    )
}

export default Header