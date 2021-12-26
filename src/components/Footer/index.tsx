import React from "react";
import Logo from "./../../assets/Logo.png";
import { routeMain as routeMain } from "./../../pages/MainPage/index";
import { NavLink } from "react-router-dom";
import "./style.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="mainFooter">
                    <div>
                        <NavLink to={routeMain()}>
                            <img src={Logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="small">Дипломный проект</div>
                    <div className="small__item">
                        Made by
                        <div>Olesya Kostina</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
