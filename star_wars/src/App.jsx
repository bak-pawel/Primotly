import "./App.scss";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import { getHomeworldData, getUsers } from "./functions/GettingData";
import RenderTableCharacters from "./components/RenderTableCharacters";

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
      <Button variant="dark" onClick={() => {
        setFamilies()
        setResponse()
        getUsers("https://swapi.dev/api/people/", setResponse)
      }}>Test kurczak</Button>
       {RenderTableCharacters(response,families)}
    </Row>
  )
}

export default App;
