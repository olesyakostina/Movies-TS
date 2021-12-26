import React from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";

import { routeMain as routeMain } from "./../../pages/MainPage/index";
import { routeMain as routeFilmsCategory } from "pages/FilmsCategoryPage/index";
// import { routeMain as routeFilmsCategoryDetails } from "./../../pages/FilmsCategoryDetailsPage";
import { routeMain as routeAboutUs } from "pages/AboutUsPage/index";
import { routeMain as routeSearch } from "pages/SearchPage/index";
import Logo from "assets/Logo.png";
import Title from "../Title";

const Header = () => {
    return (
        <div>
            <header className="mainHeader">
                <NavLink to={routeMain()} className="title">
                    <img src={Logo} alt="logo" />
                </NavLink>
                <nav>
                    <NavLink to={routeMain()} activeClassName={"linkActive"}>
                        Главная
                    </NavLink>
                    <NavLink
                        to={routeFilmsCategory()}
                        activeClassName={"linkActive"}
                    >
                        Фильмы по категории
                    </NavLink>
                    <NavLink to={routeAboutUs()} activeClassName={"linkActive"}>
                        О нас
                    </NavLink>
                    <NavLink to={routeSearch()} activeClassName={"linkActive"}>
                        Поиск
                    </NavLink>
                </nav>
            </header>
            <Title />
        </div>
    );
};
export default Header;
