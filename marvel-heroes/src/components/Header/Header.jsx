import React from "react";
import { Navbar, Container } from "react-bootstrap";

export class Header extends React.Component {
    render() {
        return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            </Container>
        </Navbar>
        )
    }
}