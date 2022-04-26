import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Nav, Navbar, Input, Label, Tab, i } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { IconName, AiOutlineCheckSquare, AiFillCheckSquare, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiCheckbox, BiCheckboxMinus } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { GrCheckbox, GrAddCircle, GrTable } from "react-icons/gr";
import { IoIosCheckbox } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import 'bootstrap-icons/font/bootstrap-icons.css';
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
import { useState } from 'react';
function FilmScores(props) {
    return (
        <FilmsTable films={props.films}></FilmsTable>
    );
}

function FilmsTable(props) {
    const [films, setFilms] = useState(props.films);
    const [showForm, setShowForm] = useState(false);
/*
    function deleteExam(code) {
        // setExams(...)   // remove exam
        setFilms(films.filter((e) => e.nome !== nome));
    }*/

    return (
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
            <Table>
                <thead>
                    <tr>
                        <th>Exam</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        films.map((fi) => <FilmsRow film={fi} key={fi.nome} />)
                    }
                </tbody>
            </Table>
            {
                (!showForm) ? <Button onClick={() => setShowForm(true)}>Add</Button> :
                    <ExamForm cancel={() => setShowForm(false)} />
            }

            
        </Row>
    );
}

function FilmsRow(props) {
    return (
        <tr><FilmData film={props.film} /></tr>
    );
}

function FilmData(props) {
    return (
        <>
            <td>{props.exam.nome}</td>
            <td>{props.exam.score}</td>
            <td>{props.exam.date}</td>
        </>
    );
}

function ExamActions(props) {
    return <td><Button variant='danger'
        onClick={() => { props.deleteExam(props.code) }}
    ><i className='bi bi-trash3'></i></Button></td>
}

function ExamForm(props) {
    const [name, setName] = useState('');

    return (
        <>
            <form>
                <input type="text" name="nome" className="form-control" value={name}
                    onChange={(event) => { setName(event.target.value.toUpperCase()) }}></input>
            </form>
            <Button onClick={props.cancel}>Cancel</Button>
        </>
    );
}

export { FilmScores };