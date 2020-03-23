import React from 'react'
import { Container, Row } from 'reactstrap';

import "./ExperienceItem.css"

type SideGroup = {
    title: string,
    items: Array<string>,
}

const SideGroup: React.SFC<SideGroup> = (props) => {
    return (
        <Container className="Container" fluid>
            <Row className="">
                <b>{props.title}</b> 
            </Row>
            {
                props.items.map(( item ) => (
                    <Row className="Experience">
                        {item}
                    </Row>
                ))
            }
        </Container>
    )
}

export default SideGroup