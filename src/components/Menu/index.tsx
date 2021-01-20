import * as React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Menu: React.FC = (): React.ReactElement => (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">
            React E-Com
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
                Products
            </Nav.Link>
            <Nav.Link as={Link} to="/product-details">
                Product Details
            </Nav.Link>
        </Nav>
    </Navbar>
);
export default Menu;
