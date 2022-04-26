import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row,Nav,Navbar,Input,Label,Tab,i} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { IconName,AiOutlineCheckSquare,AiFillCheckSquare,AiFillStar,AiOutlineStar} from "react-icons/ai";
import {BiCheckbox, BiCheckboxMinus } from "react-icons/bi";
import {GoTrashcan } from "react-icons/go";
import {GrCheckbox,GrAddCircle, GrTable} from "react-icons/gr";
import { IoIosCheckbox} from "react-icons/io";
import { BsPencilSquare} from "react-icons/bs";

import logo from './logo.svg';
import './App.css';
import './Tabella.css';
import MyButton from './Button.js';
import MyNavBar from './Navbar.js';
import { InputGroup } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { TabContainer } from 'react-bootstrap';



function MyTabella() {
  return (
   <Container fluid>
     <Row>
       <Col className='col-3' class="colonna3">
       <div className="d-grid gap-2">
  <Button variant="light" size="lg">
    All
  </Button>
  
</div>
<div className="d-grid gap-2">
  <Button variant="light" size="lg">
    Favorites
  </Button>
  
</div>
<div className="d-grid gap-2">
  <Button variant="light" size="lg">
    LastSeen
  </Button>
 
</div>
<div className="d-grid gap-2">
  <Button variant="light" size="lg">
    SeenLastMonth
  </Button>
  
</div>
<div className="d-grid gap-2">
  <Button variant="light" size="lg">
    Unseen
  </Button>
 </div>
 </Col>
 
       <Col className='col-9'>
        
        <h2>Filter:All</h2>
        <main>
          
<Table>

 <Container fluid="md">
    <Row>
    <Col>
    <BsPencilSquare></BsPencilSquare>
    <GoTrashcan></GoTrashcan>
    <text id="testo1"> Pulp Fiction</text>
    </Col>
    <Col>
    <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Favorite"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
  </div>
  ))}
</Form>
</Col>

    <Col>
    <text>March,10,2022</text>
    </Col>

    <Col>

    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    </Col>

  </Row>

  <Row>
  <Col>
    <BsPencilSquare></BsPencilSquare>
    <GoTrashcan></GoTrashcan>
    <text id="testo2">21 Grams</text>
    </Col>
    <Col>
    <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Favorite"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
  </div>
  ))}
</Form>
</Col>

    <Col>
    <text>March,17,2022</text>
    </Col>

    <Col>

    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiOutlineStar></AiOutlineStar>
    </Col>
  </Row>

  <Row>
  <Col>
    <BsPencilSquare></BsPencilSquare>
    <GoTrashcan></GoTrashcan>
    <text>Star Wars</text>
    </Col>
    <Col>
    <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Favorite"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
  </div>
  ))}
</Form>
</Col>

    <Col>
    <text></text>
    </Col>

    <Col>

    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    </Col>
  </Row>

  <Row>
  <Col>
    <BsPencilSquare></BsPencilSquare>
    <GoTrashcan></GoTrashcan>
    <text>Matrix</text>
    </Col>
    <Col>
    <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Favorite"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
  </div>
  ))}
</Form>
</Col>

    <Col>
    <text></text>
    </Col>

    <Col>

    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    </Col>
  </Row>

  <Row>
  <Col>
    <BsPencilSquare></BsPencilSquare>
    <GoTrashcan></GoTrashcan>
    <text>Shrek</text>
    </Col>
    <Col>
    <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Favorite"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
  </div>
  ))}
</Form>
</Col>

    <Col>
    <text>March,21,2022</text>
    </Col>

    <Col>

    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiOutlineStar></AiOutlineStar>
    <AiOutlineStar></AiOutlineStar>
    </Col>
  </Row>
  
  </Container>

  </Table>


  </main>
   
   
   </Col>
   
     </Row>





<footer>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button className="btn btn-primary" type="circle" size="sm"><GrAddCircle></GrAddCircle></Button>
</div>
</footer>
     </Container>

  
   )
}

export default MyTabella;
