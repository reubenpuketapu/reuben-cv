import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import ExperienceItem from '../StyledComponents/ExperienceItem'
import SideGroup from '../StyledComponents/SideGroup'

import "./Main.css"
import data from "../data.json" 

function Main() {
    return (
        <Container fluid className="Header Header-side">
            <Row>
                <Col xs="7">
                    <Row>
                        <div className="ExperienceHeader">
                            WORK EXPERIENCES
                        </div>
                        { 
                            data.experience.items.map(( item ) => (
                                <ExperienceItem 
                                    title={item.title}
                                    companyInfo={item.companyInfo}
                                    paragraph={item.paragraph}
                                />
                            ))
                        }
                    </Row>
                    <Row>
                        <div className="ExperienceHeader">
                            EDUCATION
                        </div>
                            <ExperienceItem 
                                title={data.education.degree}
                                companyInfo={data.education.university}
                                paragraph={data.education.info}
                            />
                    </Row>
                </Col>
                <Col className="Sideheader Header-side">
                    <Row>
                        <div className="ExperienceHeader">
                            SKILLS
                        </div>
                            <SideGroup 
                                title="Technical"
                                items={data.skills.technical}
                            />
                            <SideGroup 
                                title="Professional"
                                items={data.skills.professional}
                            />  
                    </Row>
                    <Row >
                        <div className="ExperienceHeader">
                            INTERESTS
                        </div>
                        {
                            <SideGroup 
                            title=""
                            items={data.interests.items}/>
                        }
                    </Row>
                    <Row>
                        <div className="ExperienceHeader">
                        AWARDS + CERTIFICATIONS
                        </div>
                            {data.awardscertifications.map(item => (
                                <SideGroup 
                                    title={item.company}
                                    items={[item.award]}
                            />
                            ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Main