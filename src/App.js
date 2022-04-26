import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row,Nav,Navbar } from 'react-bootstrap';
import { IconName,AiOutlineCheckSquare } from "react-icons/ai";
import React from 'react';
import DayJS from 'react-dayjs';

import logo from './logo.svg';
import './App.css';
import MyButton from './Button.js';
import MyNavBar from './Navbar.js';
import MyTabella from './Tabella';
import { FilmScores } from './FilmComponents';
const fakeFilms=[
  {nome:'Pulp Fiction',favorite:true,score:5, date: '2022-02-01' },
  {nome:'21 Grams',favorite:true,score:5,date: '2022-02-01' }
]

function App() {
  return (
    <Container fluid>
      <Row>
        
      </Row>
      <Row>
        <Col>
          <FilmScores exams={fakeFilms}></FilmScores>
        </Col>
      </Row>
      </Container>
    
    

   )
}

export default App;
