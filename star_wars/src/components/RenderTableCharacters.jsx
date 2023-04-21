import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
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
      return (
        <Card className="mt-5 pe-0 ps-0">
            <Card.Header>Results</Card.Header>
            <Card.Body>
                {response === undefined || families === undefined
                    ? RenderSpinner(5)
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
                            {response?.map((element, index) => {
                        return( <tr key={index}>
                                    <OverlayTrigger
                                        key={index}
                                        trigger="click"
                                        placement="right-start"
                                        rootClose
                                        rootCloseEvent="mousedown"
                                        overlay={
                                            <Popover id={`popover-positioned-top`}>
                                                <Popover.Body className='height__size'>
                                                    {films === undefined
                                                        ? RenderSpinner(5)
                                                        : <Row>
                                                            {films === undefined
                                                                ? RenderSpinner(1)
                                                                :
                                                                <Table className='m-0' striped bordered hover variant="secondary">
                                                                    <tbody>
                                                                        {films.map((element,index)=>(
                                                                            <>
                                                                        <tr>
                                                                            <td className='text-center size__column'><strong>Name:</strong> {element.title}</td>
                                                                            <td className='text-center size__column'><strong>Date:</strong>  {element.release_date}</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <td className='text-center' colSpan={2}>
                                                                                {(element.opening_crawl).substring(0,129)}
                                                                                </td>
                                                                        </tr>
                                                                        </>
                                                                        ))}
                                                                    </tbody>
                                                                </Table>
                                                            }

                                                        </Row>}
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <td onClick={() => {
                                            setFilms()
                                            getFilmData(element.films, setFilms)
                                        }}>{element.name}</td>
                                    </OverlayTrigger>
                                    <td>{findElementFamily(families, element.homeworld).name}</td>
                                    <td>{findElementFamily(families, element.homeworld).population === "unknown" ? 0 : findElementFamily(families, element.homeworld).population}</td>
                                </tr>
                            )})}
                        </tbody>
                    </Table>
                }
            </Card.Body>
        </Card>
    )
}
export default RenderTableCharacters;