import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { CardDisplay } from "./partials/CardDisplay";
import { Search } from "./partials/Search";

export class Cards extends React.Component {
    render() {
        return(
            <Container>
                <Search></Search>
                <CardDisplay></CardDisplay>
            </Container>
        )
    }
}