import "./App.scss";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import { getHomeworldData, getUsers } from "./functions/GettingData";
import RenderTableCharacters from "./components/RenderTableCharacters";

const App = () => {
  const [response, setResponse] = useState()
  const [families, setFamilies] = useState()
  const [name, setName] = useState()
  const [responseToRenderPage, setResponseToRenderPage] = useState()
  const [renderTable, setRenderTable]=useState(false)

  useEffect(() => {
    if (response) {
      let listToTest 
      if (name === undefined) {
        listToTest = response.results
        setResponseToRenderPage(listToTest)
      } else {
        listToTest = response.results.filter(element => (element.name).toLowerCase().includes(name.toLowerCase()))
        setResponseToRenderPage(listToTest)
      }
    }
  }, [response]);
  
  useEffect(() => {
    if(responseToRenderPage !== undefined){
      getHomeworldData(responseToRenderPage, setFamilies);
    }
  }, [responseToRenderPage]);

  return (
    <Row className="mt-5 text-center max__width__row">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Type to search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="dark" onClick={() => {
          setFamilies()
          setResponse()
          setRenderTable(true)
          getUsers("https://swapi.dev/api/people/", setResponse)
        }}>Search</Button>
      </Form>
      {RenderTableCharacters(responseToRenderPage, families, renderTable)}
    </Row>
  )
}

export default App;
