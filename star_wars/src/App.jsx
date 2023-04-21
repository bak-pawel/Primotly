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
  useEffect(() => {
    if (response) {
      if (name === undefined) {
        setResponseToRenderPage(response.results)
      } else {
        setResponseToRenderPage(response.results.filter(element => (element.name).toLowerCase().includes(name.toLowerCase())))
      }
    }
  }, [response]);
  useEffect(() => {
    console.log(responseToRenderPage)
    if(responseToRenderPage !== undefined){
      getHomeworldData(responseToRenderPage, setFamilies);
    }
  }, [responseToRenderPage]);

  return (
    <Row className="mt-5 text-center max__width__row">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="dark" onClick={() => {
          setFamilies()
          setResponse()
          getUsers("https://swapi.dev/api/people/", setResponse)
        }}>Search bar</Button>
      </Form>
      {RenderTableCharacters(responseToRenderPage, families)}
    </Row>
  )
}

export default App;
