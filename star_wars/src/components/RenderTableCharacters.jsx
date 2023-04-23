import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { RenderSpinner } from '../functions/GeneratingComponents';
import RenderTable from './RenderTable';

const RenderTableCharacters = (response, families,renderTable) => {
    const [films, setFilms] = useState()
    if(renderTable === true){
    return (
        <Card className="mt-5 pe-0 ps-0">
            <Card.Header>Results</Card.Header>
            <Card.Body>
                {response === undefined || families === undefined
                    ? RenderSpinner(5)
                    : RenderTable(response, films, families, setFilms)
                }
            </Card.Body>
        </Card>
    )
            }
}
export default RenderTableCharacters;