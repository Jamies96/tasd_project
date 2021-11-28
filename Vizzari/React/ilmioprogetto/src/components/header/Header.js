import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Collapse,
    NavbarToggler,
} from 'reactstrap';
import './Header.css';
import logo from '../../assets/img/logo.png';
import { NavLink as RouterLink } from 'react-router-dom';


function Header(props) {
    const [isToogleOpen, setIsToogleOpen] = useState(false);
    const pageListItem = props.pageListItem;
    const listItems = pageListItem.map((item) => {
        return (
            <NavItem>
                <RouterLink to={item.url} className="nav-link">
                    {item.text}
                </RouterLink>
            </NavItem>
        );
    });

    return (
        <>
            <Navbar dark full expand="md">
                <NavbarBrand>
                    <RouterLink to="/">
                        <img src={logo} />
                    </RouterLink>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsToogleOpen(!isToogleOpen)} />
                <Collapse isOpen={isToogleOpen} navbar>
                    <Nav className="ml-auto container-fluid" navbar>
                        {listItems}
                    </Nav>
                </Collapse>
            </Navbar>
        </ >
    )
}

export default Header;
