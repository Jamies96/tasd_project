import React, {useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,} from 'reactstrap';
import './Header.css';
import logo from '../../assets/img/logo.png';
import {NavLink as RouterLink} from 'react-router-dom';

/*
    This is a statefull component which sets the header of the web application.
    The Header is composed by a navbar and navItems which are the section of the menu
    and the related links.
*/
function Header(props) {
    const [isToogleOpen, setIsToogleOpen] = useState(false);
    const pageListItem = props.pageListItem;
    const listItems = pageListItem.map((item) => {
        return (
            <NavItem>
                <RouterLink to={item.url} className="nav-link header-link">
                    {item.text}
                </RouterLink>
            </NavItem>
        );
    });

    // This loop is needed to creare a void space.
    const brSpaces = [];
    for (let i = 0; i < 3; ++i) {
        brSpaces.push(<br/>)
    }

    //The NavbarToggler component of reacstrap is needed to manage the mobile mode of the navbar
    return (
        <>
            <Navbar dark full expand="md" fixed="top">
                <NavbarBrand>
                    <RouterLink to="/">
                        <img src={logo}/>
                    </RouterLink>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsToogleOpen(!isToogleOpen)}/>
                <Collapse isOpen={isToogleOpen} navbar>
                    <Nav className="ml-auto container-fluid" navbar>
                        {listItems}
                    </Nav>
                </Collapse>
            </Navbar>
            {brSpaces}
        </ >
    )
}

export default Header;
