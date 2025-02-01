import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";


export default function NavBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary px-4">
            <Navbar.Brand as={Link} to='./'>Jonathan Zacarias</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="me-2">
                    <Nav.Link as={Link} to='../about'>About</Nav.Link>
                    <Nav.Link as={Link} to='../projects'>Projects</Nav.Link>
                    <Nav.Link as={Link} to='../resume'>Resume</Nav.Link>
                    <Nav.Link as={Link} to='https://github.com/jonathanazacarias' target="_blank"><Image src='src\components\navBar\navImages\github.svg'/></Nav.Link>
                    <Nav.Link as={Link} to='https://www.linkedin.com/in/jonathan-a-zacarias/' target="_blank"><Image src='src\components\navBar\navImages\linkedin.svg'/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
