import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";


export const Search = () => {
  return (
    <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Search"
            className="mr-2 mt-2"
            aria-label="Search"
        />
        <Button variant="outline-success">Go</Button>
    </Form>
  );
}
