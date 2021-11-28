import React from "react";
import './Footer.css';
import first_logo from '../../assets/img/logo_unimib.png';
import second_logo from '../../assets/img/logo_disco.png';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    const lastLineText = props.lastLineText;
    const first_logo_url = props.first_logo_url;
    const second_logo_url = props.second_logo_url;
    const pageListItem = props.pageListItem;

    const listItems = pageListItem.map((item) => {
        return (
            <li className="nav-item">
                <NavLink to={item.url}>
                    {item.text}
                </NavLink>
            </li>
        );
    });

    return (
        <footer class="fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-1 col-sm-12 text-center d-md-flex justify-content-start">
                        <ul className="nav flex-column">
                            {listItems}
                        </ul>
                    </div>

                    <div className="col-md-3 offset-md-8 col-sm-12 text-center d-md-flex justify-content-end" id="col-logos">
                        <a href={first_logo_url}><img src={first_logo} /></a>
                        <a href={second_logo_url}><img src={second_logo} /></a>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 text-center">
                            {lastLineText}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;