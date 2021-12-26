import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./../Header/index";
import Footer from "../Footer";

import MainPage, { routeMain as routeMain } from "./../../pages/MainPage/index";
import FilmsCategoryPage, {
    routeMain as routeFilmsCategory,
} from "./../../pages/FilmsCategoryPage/index";
import FilmsCategoryDetailsPage, {
    routeMain as routeFilmsCategoryDetails,
} from "./../../pages/FilmsCategoryDetailsPage/index";
import AboutUsPage, {
    routeMain as routeAboutUs,
} from "./../../pages/AboutUsPage/index";
import SearchPage, {
    routeMain as routeSearch,
} from "./../../pages/SearchPage/index";

import "./style.css";

const AppContent = () => {
    return (
        <>
            <div className="mainWrapper">
                <Header />
                <main>
                    <Switch>
                        <Route path={routeMain()} component={MainPage} />
                        <Route
                            exact
                            path={routeFilmsCategory()}
                            component={FilmsCategoryPage}
                        />
                        <Route
                            exact
                            path={routeFilmsCategoryDetails()}
                            component={FilmsCategoryDetailsPage}
                        />
                        <Route path={routeAboutUs()} component={AboutUsPage} />
                        <Route path={routeSearch()} component={SearchPage} />
                        <Redirect
                            to={{
                                pathname: routeMain(),
                            }}
                        />
                    </Switch>
                </main>
            </div>
            <Footer />
        </>
    );
};
export default AppContent;
