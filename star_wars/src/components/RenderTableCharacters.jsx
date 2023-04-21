import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RenderSpinner } from '../functions/GeneratingComponents';
import { getFilmData } from '../functions/GettingData';
import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const findElementFamily = (data, name) => {
    return data.find(elementFamily => elementFamily.url === name)
}
const RenderTableCharacters = (response, families) => {
  const [films, setFilms] = useState()
  console.log(films)
    return (
        <Card className="mt-5 pe-0 ps-0">
            <Card.Header>Results</Card.Header>
            <Card.Body>
                {response === undefined || families === undefined
                    ? RenderSpinner()
                    :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Homeworld name</th>
                                <th>Homeworld population</th>
                            </tr>
                        </thead>
                        <tbody>
                            {response.results?.map((element, index) => (
                                <tr>
                                 <OverlayTrigger
                                 key={index}
                                 trigger="click"
                                 placement="right-start"
                                 rootClose
                                 rootCloseEvent="mousedown"
                                 overlay={
                                   <Popover id={`popover-positioned-top`}>
                                     <Popover.Body>
                                        {films === undefined
                                        ?RenderSpinner()
                                    :<Row>
                                        <Row>
                                            <Col>test12344</Col>
                                            <Col>15-34-2054</Col>
                                        </Row>
                                        <Row>gyeudhbjaksdhcsieudkjhfbscehdfdeiusakjdhiueakjs</Row>
                                        
                                        </Row>}
                                     </Popover.Body>
                                   </Popover>
                                 }
                               >
                                    <td onClick={() =>{
                                    setFilms()
                                    getFilmData(element.films,setFilms)
                                }}>{element.name}</td>
                               </OverlayTrigger>
                                    <td>{findElementFamily(families, element.homeworld).name}</td>
                                    <td>{findElementFamily(families, element.homeworld).population === "unknown" ? 0 : findElementFamily(families, element.homeworld).population}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                }
            </Card.Body>
        </Card>
    )
}
export default RenderTableCharacters;