import "./App.scss";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import { getHomeworldData, getUsers } from "./functions/GettingData";

const App = () => {
  const [response, setResponse] = useState()
  const [families, setFamilies] = useState()

  useEffect(()=>{
    if(response){
     getHomeworldData(response,setFamilies)
    }
  },[response])

  return (
    <Row className="mt-5 text-center max__width__row">
      <Button variant="dark" onClick={() => getUsers("https://swapi.dev/api/people/", setResponse)}>Test kurczak</Button>
      {response === undefined || families === undefined
        ? <></>
        :
        <Card className="mt-5 pe-0 ps-0">
          <Card.Header>Results</Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Homeworld name</th>
                  <th>Homeworld population</th>
                </tr>
              </thead>
              <tbody>
                {response.results?.map((element, index) => {
                  let findFamily =families.find(elementFamily=>elementFamily.url ===element.homeworld)
                return(
                  <tr key={index}>
                    <td>{element.name}</td>
                    <td>{findFamily.name}</td>
                    <td>{findFamily.population==="unknown"?0:findFamily.population}</td>
                  </tr>
                )})}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      }
    </Row>
  )
}

export default App;
