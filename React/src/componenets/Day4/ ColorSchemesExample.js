import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Task1_1 from '../Day2/Task1_1';
import Task1_2 from '../Day2/Task1_2';
import Task2 from '../Day2/Task2' 
import Task3 from '../Day3/Task3';
import Task4 from '../Day5/Task4';
import Task5  from '../Day5/Task5';
import Task7 from '../Day6/Task7';
import { Task1 } from '../Day6/Task1';
import { Tablee } from '../Day7/Table';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href='/Task1_1'>FunCompo</Nav.Link>
            <Nav.Link href='/Task1_2'>ClassCom</Nav.Link>
            <Nav.Link href='/Task2'>Task2</Nav.Link>
            <Nav.Link href='/Task3'>Task3</Nav.Link>
            <Nav.Link href='/Task4'>Task4</Nav.Link>
            <Nav.Link href='/Task5'>Task5</Nav.Link>
            <Nav.Link href='/Task1'>Task6</Nav.Link>
            <Nav.Link href='/Task7'>Task7</Nav.Link>
            <Nav.Link href='/Task8'>Task8</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;